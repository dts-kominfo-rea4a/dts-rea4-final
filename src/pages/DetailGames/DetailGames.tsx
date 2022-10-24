import { useDetailAppQuery } from '@/services/queries/app.query';
import { Navigate, useParams } from 'react-router-dom';
import { Tabs } from 'flowbite-react';
import { formatDate } from '@/lib/helper';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Screenshot } from '@/types/app';

interface PopUpAttributes {
  show: boolean;
  content?: React.ReactNode;
}

const DetailGames = () => {
  const { gameId } = useParams();
  const [popUp, setPopup] = useState<PopUpAttributes>({
    show: false,
    content: null,
  });

  const onOpen = (scr: Screenshot, title: string, idx: number) => {
    setPopup((pop) => ({
      ...pop,
      show: true,
      content: (
        <img
          key={scr.id}
          src={scr.image}
          alt={`screenshot ${title} ${idx}`}
          className="block w-screen h-auto rounded"
        />
      ),
    }));
  };

  const onClose = () => {
    setPopup((pop) => ({ ...pop, show: false, content: null }));
  };

  if (gameId) {
    const { data: game, isLoading } = useDetailAppQuery({ id: gameId });

    if (isLoading) return <div>Loading...</div>;
    else if (!game) return <Navigate to="/games" />;

    if (game) {
      let description = 'There is no description.';
      const splittedSentences = game.description
        .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
        .split('|');
      if (splittedSentences) {
        const groupedArr = Array.from({ length: 3 }, () =>
          splittedSentences.splice(0, 3).join(' ')
        );
        description = groupedArr.join('\n\n');
      }

      return (
        <div className="w-full text-gray-800 bg-white -z-50 md:px-12 dark:bg-gray-800 dark:text-gray-200">
          <div className="grid order-2 grid-cols-1 gap-6 pt-12 mx-auto lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-1 lg:sticky lg:z-10">
              <div className="flex flex-col items-start justify-start w-full space-y-4">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="block w-full h-auto rounded "
                />
                <div className="grid items-center w-full gap-2 xl:grid-cols-3 2xl:grid-cols-6">
                  <span className="col-span-1 p-2 text-center text-gray-200 rounded shadow-md 2xl:p-4 bg-slate-600 dark:bg-slate-700">
                    Free
                  </span>
                  <span className="col-span-2 p-2 text-center text-gray-200 rounded shadow-md 2xl:p-4 bg-slate-600 dark:bg-slate-700">
                    {game.genre}
                  </span>
                  <Button
                    gradientDuoTone="cyanToBlue"
                    className="flex items-baseline col-span-3"
                    size="lg"
                    onClick={() =>
                      window.open(
                        game.game_url,
                        '_blank',
                        'noopener noreferrer'
                      )
                    }
                  >
                    PLAY NOW{' '}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <Tabs.Group aria-label="Game Panel" style="underline">
                <Tabs.Item active={true} title="About">
                  <p className="text-gray-500 whitespace-pre-line dark:text-gray-400">
                    {`${description}`}
                  </p>
                </Tabs.Item>
                <Tabs.Item title="Additional Information">
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Title
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {game.title}
                      </span>
                      <span></span>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Release Date
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {formatDate(game.release_date)}
                      </span>
                      <span></span>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Developer
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {game.developer}
                      </span>
                      <span></span>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Genre
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {game.genre}
                      </span>
                      <span></span>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Publisher
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {game.publisher}
                      </span>
                      <span></span>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-2">
                      <span className="text-gray-400 dark:text-gray-500">
                        Platform
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {game.platform}
                      </span>
                      <span></span>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Screenshots">
                  <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {game.screenshots.map((scr, idx) => {
                      return (
                        <img
                          key={scr.id}
                          src={scr.image}
                          alt={`screenshot ${game.title} ${idx}`}
                          className="block w-full h-auto rounded cursor-pointer"
                          onClick={() => onOpen(scr, game.title, idx)}
                        />
                      );
                    })}
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Minimum System Requirements">
                  {game.minimum_system_requirements ? (
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          OS ({game.platform})
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {game.minimum_system_requirements.os}
                        </span>
                        <span></span>
                      </div>
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          Processor
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {game.minimum_system_requirements.processor}
                        </span>
                        <span></span>
                      </div>
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          Memory
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {game.minimum_system_requirements.memory}
                        </span>
                        <span></span>
                      </div>
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          Graphics
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {game.minimum_system_requirements.graphics}
                        </span>
                        <span></span>
                      </div>
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          Storage
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {game.minimum_system_requirements.storage}
                        </span>
                        <span></span>
                      </div>
                      <div className="flex flex-col items-start justify-start space-y-2">
                        <span className="text-gray-400 dark:text-gray-500">
                          Additional Notes
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          Specification may change during development
                        </span>
                        <span></span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-500 whitespace-pre-line dark:text-gray-400">
                      <p>
                        {game.title} is a browser based game and should run
                        smoothly on practically any PC with a updated
                        web-browser.
                      </p>
                      <br />
                      <p>
                        If you have old hardware or software, you may still be
                        able to play {game.title}, but your game experience may
                        suffer. For the best gameplay experience, we recommend
                        the latest versions of Firefox, Chrome, or Edge
                        browsers.
                      </p>
                    </div>
                  )}
                </Tabs.Item>
              </Tabs.Group>
            </div>
          </div>
          <Modal
            show={popUp.show}
            size="6xl"
            popup={true}
            onClose={onClose}
            position="center"
          >
            <Modal.Header />
            <Modal.Body>{popUp.content}</Modal.Body>
          </Modal>
        </div>
      );
    }

    return null;
  }
  return <div></div>;
};

export default DetailGames;
