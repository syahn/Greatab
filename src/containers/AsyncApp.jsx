import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/feed/reddit'
import Picker from '../components/feeds/Picker'
import Posts from '../components/feeds/Posts'

class AsyncApp extends Component {
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)


//
// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
//
// import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions/feed/reddit'
//
// import Picker from '../components/feeds/Picker'
// import Posts from '../components/feeds/Posts'
//
// class AsyncApp extends Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleRefreshClick = this.handleRefreshClick.bind(this)
//   }
//
//   componentDidMount() {
//     const { dispatch, selectedSubreddit } = this.props
//     dispatch(fetchPostsIfNeeded(selectedSubreddit))
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
//       const { dispatch, selectedSubreddit } = nextProps
//       dispatch(fetchPostsIfNeeded(selectedSubreddit))
//     }
//   }
//
//   handleChange(nextSubreddit) {
//     this.props.dispatch(selectSubreddit(nextSubreddit))
//   }
//
//   handleRefreshClick(e) {
//     e.preventDefault()
//
//     const { dispatch, selectedSubreddit } = this.props
//     dispatch(invalidateSubreddit(selectedSubreddit))
//     dispatch(fetchPostsIfNeeded(selectedSubreddit))
//   }
//
//   render() {
//
//     const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
//     return (
//       <div>
//         <Picker value={selectedSubreddit}
//                 onChange={this.handleChange}
//                 options={[ 'reactjs', 'frontend' ]} />
//         <p>
//           {lastUpdated &&
//             <span>
//               Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
//               {' '}
//             </span>
//           }
//           {!isFetching &&
//             <a href='#'
//                onClick={this.handleRefreshClick}>
//               Refresh
//             </a>
//           }
//         </p>
//         {isFetching && posts.length === 0 &&
//           <h2>Loading...</h2>
//         }
//         {!isFetching && posts.length === 0 &&
//           <h2>Empty.</h2>
//         }
//         {posts.length > 0 &&
//           <div style={{ opacity: isFetching ? 0.5 : 1 }}>
//             <Posts posts={posts} />
//           </div>
//         }
//       </div>
//     )
//   }
// }
//
// AsyncApp.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }
//
// function mapStateToProps(state) {
//   const { selectedSubreddit, postsBySubreddit } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsBySubreddit[selectedSubreddit] || {
//     isFetching: true,
//     items: []
//   }
//
//   return {
//     selectedSubreddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
// }
//
// export default connect(mapStateToProps)(AsyncApp)
