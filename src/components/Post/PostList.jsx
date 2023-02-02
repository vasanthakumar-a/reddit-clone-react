import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import reddit_logo from '../../images/reddit-logo.png'
import { FaRegBookmark, FaRegCommentAlt, FaRegFlag, FaShare } from 'react-icons/fa'
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb'

import '../../css/post.css'

const PostList = ({ account, posts, community }) => {
  return (
    <div>
      {posts && posts.map((post) => {
        return (
          <div key={post.id} className="card post-card mb-3 shadow">
            <div className="row m-0">
              <div className="col-1 m-0 vote-col text-center">
                <div id="vote-actions-1" className="d-block vote" data-id="1">
                  <div className="upvote">
                    <TbArrowBigTop />
                  </div>
                  <span className="font-weight-bold score">2</span>
                  <div className="downvote">
                    <TbArrowBigDown />
                  </div>
                </div>
              </div>
              <div className="col-11">
                <div className="row bg-white">
                  <div className="col-10">
                    <div className="d-flex gap-1 post-list-head mt-2">
                      <img src={reddit_logo} alt="" className="post-list-profile-img mr-1" />
                      <strong><Link to={`/r/${post.community_id}`} className='text-dark' >r/{community ? [community.name] : [post.community && post.community.name]}</Link></strong>
                      <p className="ml-3 text-muted">Posted by
                        <Link to='/' className="text-muted"> u/{account ? [account.username] : [post.account && post.account.username]} </Link>
                        {moment(post.created_at).fromNow()}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex post-title">
                    <h5><Link to={`/r/${post.community_id}/p/${post.id}`} className="text-muted text-decoration-none">{post.title}</Link></h5>
                    <p className="flair-badge">Flair</p>
                    <p className="flair-badge bg-success">OC</p>
                    <p className="flair-badge bg-warning">Spoiler</p>
                    <p className="flair-badge bg-danger">NSFW</p>
                  </div>
                </div>
                <div className="row">
                  <div className="list-post-img">
                    <p className="col-12 "><div dangerouslySetInnerHTML={{ __html: post.body }} /></p>
                  </div>
                </div>
                <div className="row mt-1 mb-1">
                  <div className="col-12 d-flex gap-3">
                    <Link to={`/r/${post.community_id}/p/${post.id}`} className="list-post-tab">
                      <FaRegCommentAlt /> 0 Comments
                    </Link>
                    <Link to='' className="list-post-tab">
                      <FaShare /> Share
                    </Link>
                    <Link to='' className="list-post-tab saved">
                      <FaRegBookmark /> Save
                    </Link>
                    <Link to={`/r/${post.community_id}/p/${post.id}`} className="list-post-tab">
                      <FaRegFlag /> Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default PostList
