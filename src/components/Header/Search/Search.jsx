import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '../../../utils/data/api';

import "./Search.scss";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const [filterData, setFilterData] = useState(Product);
    console.log(filterData);
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
        const filtered = filterData.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilterData(filtered);
    }

    return <div className='search-modal'>
        <div className="form-field">
            <input type="text" name="" id=""
                autoFocus
                placeholder='Search for products'
                value={query}
                onChange={onChange}
            />
            <MdClose className='close-btn' onClick={() => setShowSearch(false)} />
        </div>

        {
            filterData.map((item) => {
                return (
                    <div className="search-result-content" key={item.id} onClick={() => {
                        navigate(`/product/${item.id}`);
                        setShowSearch(false);
                    }}>
                        <div className="search-results">
                            <div className="search-result-item">
                                <div className="img-container">
                                    <img src={item.img} alt={item.img} />
                                </div>
                                <div className="prod-details">
                                    <span className="name">{item.name}</span>
                                    <span className="desc">{item.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>;
};

export default Search;
