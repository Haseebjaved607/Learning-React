import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import CreatePost from "./components/createPost"
// import Post from "./components/Post"
import PostList from "./components/PostList"
import { useState } from "react"
function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
      <div className="app-container">
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
          <div className="content">
              <Header className="header" />
              <div className="main-content">
                  {selectedTab === "Home" ? <PostList className="postlist" /> : <CreatePost />}
              </div>
              <Footer className="footer" />
          </div>
      </div>
  );
}

export default App
