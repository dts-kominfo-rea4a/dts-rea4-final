# DTS REA4 Final Project

Ketentuan lengkap bisa dilihat di [Final Project Guidelines](https://docs.google.com/document/d/122KyWNQ4xxU4aFwWbM4vIfH7LM4AH2CZEZa3YsEHjCk). 

## Daftar pair

Tugas dikerjakan secara berpasangan, untuk daftar kelompok bisa dilihat pada masing-masing Classroom atau Discord Class.

## Fork and Clone

Mohon perwakilan dari pair bisa melakukan fork repo ini dan clone, untuk repositori yang di fork menggunakan penamaan:

`dts4[a/b/c]-[nomor pair]-final`

Contoh: `dts4a-01-final`

## Branching, commit

Branch dapat sesuai dengan kebutuhan dan kesepakatan bersama dalam pair, namun hasil akhirnya harus di merge ke branch `main` dan di push ke Github. Pastikan hasil akhir kode sudah ter-push!

# -- Finished Project --

Movies App is a movie listing with integrated Firebase & TMDB API. You can login with existing account or register if you don't have one, Search movie or tv shows title will return any matched title from TMDB. 

<img src="https://thumbs.gfycat.com/LiquidFaintCaterpillar-size_restricted.gif" width="100%" /><br/>

`Live Demo` [Movies App](https://xcplaysure.netlify.app)<br/><br/>
`Feature list:`
<ul>
    <li>Login, Register & Logout</li>
    <li>Fully function tab</li>
    <li>Search any Movie & TV Shows title</li>
    <li>Click any movie card redirect to view movie</li>
    <li>Firebase API</li>
    <li>TMDB API</li>
</ul><br/>

`Note:` There is a bug in TMDB API returned json, the `id` of movie is not match when used on movie/tv show search. as example movie id `84773` title `The Lord of the Rings: The Rings of Power` will return movie title `Detective Kitty O'Day`.

`PS: This project was done on solo effort`