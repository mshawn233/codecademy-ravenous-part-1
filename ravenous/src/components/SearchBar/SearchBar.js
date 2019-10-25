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
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {

        return <>

        </>
    }
}

export default SearchBar;