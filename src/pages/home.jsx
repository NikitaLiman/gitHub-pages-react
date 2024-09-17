import React from 'react';
import '../scss/inventory.scss';
import Skeleton from '../Components/Skeleton.jsx';
import SideBar from '../Components/SideBar.jsx';
import Sort from '../Components/sort.jsx';
import ContentInv from '../Components/ContentInv.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setsidebar } from '../redux/slices/filterSlice.js';
import { searchContext } from '../App.js';
import Slider from '../Components/Slider/Slider.jsx';
import '../scss/Home.scss';

const Home = () => {
  const dispach = useDispatch();
  const categoryId = useSelector((state) => state.filterSlice.sideBar);
  const sort = useSelector((state) => state.filterSlice.sort);

  const OnClickOnSideBar = (id) => {
    dispach(setsidebar(id));
  };

  const { searchValue } = React.useContext(searchContext);
  const [inv, setInv] = React.useState([]);
  const [Loadnig, setLoading] = React.useState(true);
  React.useEffect(() => {
    const sortBy = sort.sortProperty && sort.sortProperty.replace('-', '');
    const order = sort.sortProperty && sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sideBarId = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://66b922d63ce57325ac78fcd6.mockapi.io/items?${sideBarId}${search}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from API:', data); // Проверка данных
        if (Array.isArray(data)) {
          setInv(data);
        } else {
          console.error('Expected an array but got:', data);
          setInv([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setInv([]); // Устанавливаем пустой массив при ошибке
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue]);
  const Skeletons = [...new Array(9)].map((_, index) => <Skeleton key={index} />);
  const Inventory = inv.map((value) => (
    <ContentInv
      key={value.id}
      title={value.title}
      model={value.models}
      text={value.text}
      imgUrl={value.models[0].imgUrl}
      prices={value.models[0].prices}
      id={value.id}
    />
  ));
  return (
    <>
      <div className="SideBar">
        <SideBar value={categoryId} OnClickOnSideBar={OnClickOnSideBar} />
        <Slider />
      </div>
      <div className="ContentInv">
        <div className="box">
          <div className="title">All Gadgets</div>
          <Sort />
        </div>
        <div className="containerBefore">
          <div className="containerInv">{Loadnig ? Skeletons : Inventory}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
