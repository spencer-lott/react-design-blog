import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img className="headerImg" src="https://www.glenmoorbythesea.com/images/56a0dad6-2f38-4f05-8a18-e815d44e6e7c.webp" alt="" />
    </div>
  )
}
