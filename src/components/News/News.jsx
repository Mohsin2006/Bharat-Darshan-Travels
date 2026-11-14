import "./News.css"
import news_1 from "../../assets/gallery-1.jpeg"
import news_2 from "../../assets/gallery-2.jpeg"
import news_3 from "../../assets/gallery-3.jpeg"
import Title from "../Title/Title"
import { CalendarIcon, UserIcon, ArrowIcon } from "../Icons/Icons"

const posts = [
  { image: news_1, day: "12", month: "Oct", title: "Top 5 Road Trips From Delhi For A Long Weekend" },
  { image: news_2, day: "05", month: "Oct", title: "Why Booking An Outstation Cab Online Saves Time" },
  { image: news_3, day: "28", month: "Sep", title: "Tips For A Safe & Comfortable Mountain Drive" },
]

const News = () => {
  return (
    <section className='news section' id='news'>
      <div className="container">
        <Title subTitle='News & Updates' title='Recent Articles' />
        <div className="news-grid">
          {posts.map(post => (
            <article className="news-card" key={post.title}>
              <div className="news-img">
                <img src={post.image} alt={post.title} />
                <span className="news-date"><strong>{post.day}</strong>{post.month}</span>
              </div>
              <div className="news-body">
                <ul className="news-meta">
                  <li><UserIcon />Admin</li>
                  <li><CalendarIcon />2026</li>
                </ul>
                <h3><a href="#">{post.title}</a></h3>
                <a href="#" className="service-link">Read More <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
