import React, { useState, useEffect } from 'react';
import CardList from '../Presentations/CardList';
import Scroll from '../Presentations/Scroll';
import SearchBox from '../Presentations/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchField, requestRobots } from '../Action'


const App = () =>{

    const [searchResults, setSearchResults] = useState([]);

    const text = useSelector(state => state.searchRobots.searchField)

    const robosUsers = useSelector(state => state.getRobotsReducer.users)
    
    const dispatch = useDispatch();
    debugger;
    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value))
    };

    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

    useEffect(() => {
        let filteredRobots = robosUsers.filter(robots => {
            return(
                robots.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredRobots);
    }, [text,robosUsers])

    const newRobot = searchResults;

    return(
        <div className="tc">
            <Scroll>
                <h1 className="f2">RoboFamily</h1>
                <SearchBox searchChange={ onSearchChange }/>
            </Scroll>
                {
                    text === "" ? <CardList robots={ robosUsers }/> : <CardList robots={ newRobot }/>
                }
        </div>
    );
}

export default App;