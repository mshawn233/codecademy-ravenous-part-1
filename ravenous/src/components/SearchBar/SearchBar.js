import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortByOptions: {
                'Best Match': 'best_match',
                'Highest Rated': 'rating',
                'Most Reviewed': 'review_count'
            }
        }
    }

    renderSortByOptions = () => {
        return Object.keys(this.state.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.state.sortByOptions[sortByOption]
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {

        return <>
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href='http://localhost:3000'>Let's Go</a>
                </div>
            </div>
        </>
    }
}

export default SearchBar;