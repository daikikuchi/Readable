# Readable

This is Readable project using React and Reducer, I built a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

### Dependencies
- Please refer to package.json file. 

### to run API server
  - Clone or download this repository 
  - run  npm install
  - run  node server
  
  Endpoint should be running on port 5001


### To run it locally
  - Open another tab 
  - run npm install
  - run npm start
  - Access it at http://localhost:3000/ to view the app.
  
### App Functionality

- All application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.

- Updates are triggered by dispatching actions to reducers.
Reducers and actions are written properly and correctly return updated state to the store.

- Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. Posts should have buttons or links for editing or deleting that post.

- The voting mechanism works and correctly displays the new vote score after clicking.

- List posts link to the detail page for that post.

- All posts are listed at the root.

- All posts for a category are listed at /:category

- The voting mechanism works and correctly displays the new vote score after clicking.

- List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.

- Post is displayed with title, body, author, number of comments, current score and voting mechanism. Post should have buttons or links for editing or deleting that post.

- Listed comments are displayed with author, current score, and a voting mechanism to upvote or downvote the post. Comments should have buttons or links for editing or deleting that comment.

- The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

- The voting mechanism works and correctly displays the new vote score after clicking.

- All comments for a post are displayed below the post body.

- A mechanism for adding a new comment is visible on the detail page and functional.

- Application has a form for creating a new post. Submitting the form properly adds the post to the correct category.

- Application has a form for adding comments to a post. Submitting the form properly adds the comment to the correct post.

- Edit buttons for posts/comments open a form with existing data pre-populated. Submitting the form correctly updates the data for the comment/post.

- A mechanism for deleting posts and comments exists. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at it's URL.

