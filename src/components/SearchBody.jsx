import React, { Component } from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ``,
      results: [],
    };

    this.getOrCreateIndex = this.getOrCreateIndex.bind(this);
    this.search = this.search.bind(this);
  }

  getOrCreateIndex() {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);
  }

  search(evt) {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      // this.index.documentStore.getDoc(ref).title , etc
      //   create new component
    });
  }

  render() {
    return (
      <div className="max-w-screen-md mx-auto mb-10">
        <label htmlFor="blog-search">Search</label>
        <input id="blog-search" type="text" className="w-full p-2 outline-none" value={this.state.query} onChange={this.search} />
        <ul className="relative top-1">
          {this.state.results.map((page) => (
            <li key={page.id}>
              <Link to={"/blog/" + page.path}>{page.title}</Link>
              {": " + page.tags.join(`,`)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
