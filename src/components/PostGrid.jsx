import PostItem from "./PostItem";

function PostGrid({items}) {
    return(
    <div className="post-grid">
        {items.map((item, i) => (
            <PostItem key={i} item={item}/>
        ))}
    </div>
    )
}

export default PostGrid;