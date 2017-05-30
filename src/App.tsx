import * as React from 'react';
import './App.css';
import * as config from './config.env.local';

import { createClient } from 'contentful';

const ITEM_NAME = 'Post';

class App extends React.Component<{}, null> {
  public client:any;
  public state:any;

  constructor() {
    super();

    this.client = this.getClient();
    this.state = {
      posts: this.getPosts()
    }
  }

  getClient() {
    return createClient(config);
  }

  getPosts() {
    return this.client.getContentTypes()
      .then(this.getPostsContentId)
      .then(this.fetchPosts.call(this));
  }

  getPostsContentId(data:any) {
    return data.items.find((item:any) => {
      return item.name === ITEM_NAME;
    }).sys.id;
  }

  fetchPosts(contentId:string) {
    return this.client
      .getEntries({'sys.id': contentId})
      .then((resp:any) => console.log(resp));
  }
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
