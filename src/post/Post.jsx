import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://m.media-amazon.com/images/M/MV5BMTc5OTI5MzkwNl5BMl5BanBnXkFtZTgwMTAyMTMyMjE@._V1_FMjpg_UX1000_.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet co
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}
