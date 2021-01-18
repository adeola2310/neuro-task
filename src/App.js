import React, { useState } from 'react';
import './assets/scss/App.scss';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';
import ItemCard from './components/itemCard/itemCard';
import Search from './components/search/Search';
import {data} from './store/store';


function App() {


          const [items, setItems] = useState(data);
          const [name, setName] = useState('Burger')
          // const [loading setIsLoading] = useState(false);

          const [searchText, setSearchText] = useState('');
          const [searchedItems, setSearchItems] = useState([]);

          const performSearch = ()=>{
            const searchedData = items.filter((ele)=>{
              let name = ele.name.toLowerCase()
              return name.includes(searchText.toLowerCase())
          });
          setSearchItems(searchedData);
          return searchedData
          }

          const handleChange = (e)=>{
            const searchTerm = e.target.value
            setSearchText(searchTerm);
            performSearch(searchTerm)
          }

          const addItemToList = ()=>{
            const newItem = items.concat({ name });
            setItems(newItem);
          }

        const itemData = searchText ? searchedItems : items;


              return (
                <div>
                  <header className="header">
                    <Search
                    searchText={searchText}
                    handleChange={handleChange}
                    />
                    <Button
                    addItemToList={addItemToList}
                    />
                  </header>
                  <main>
                    <div className="items-grid">
                      {
                        itemData.map((item)=>(
                          <ItemCard
                          name={item.name}
                          key={item.id}
                          />
                        ))
                      }
                    </div>
                  </main>
                  <Footer/>
                </div>
              );
}

export default App;
