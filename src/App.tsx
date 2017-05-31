import * as React from 'react';
import './App.css';
import * as config from './config.env.local';

import { createClient } from 'contentful';

const ITEM_NAME = 'Post';

class App extends React.Component<{}, null> {
  public client: any;
  public state: any;

  constructor() {
    super();

    this.client = this.getClient();
    this.state = {
      posts: []
    };
  }

  getClient() {
    return createClient(config);
  }

  componentDidMount() {
    this.client.getContentTypes()
      .then((contentTypes: any) => {
        this.getPosts(this.getPostsContentTypeId(contentTypes));
      });
  }

  getPostsContentTypeId(data: any) {
    return data.items.find((item: any) => {
      return item.name === ITEM_NAME;
    }).sys.id;
  }

  getPosts(contentTypeId: string) {
    this.client.getEntries({
      content_type: contentTypeId
    })
      .then((entries: any) => {
        this.setState({
          posts: entries.items
        });
      });
  }

  renderPosts(posts: any) {
    return posts.map((post: any, key: number) => {
      return (
      <div key={key}>
        <h1>
          {post.fields.title}
        </h1>
        <p>
          {post.fields.body}
        </p>
      </div>
      );
    });
  }
 
  render() {
    const posts = this.renderPosts(this.state.posts);

    return (
      <div className="App">
        <div>
          {posts}
        </div>
      </div>
    );
  }
}

export default App;
