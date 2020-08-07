import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState";
const Home = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? (
        <h1>Loading..</h1>
    ) : (
        <React.Fragment>
            <Search />
            {initialState.mylist.length > 0 && (
                <Categories title="My list">
                    <Carousel>
                        {initialState.trends.map((item) => (
                            <CarouselItem key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>
            )}
            <Categories title="Trends">
                <Carousel>
                    {initialState.trends.map((item) => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
            <Categories title="Trends">
                <Carousel>
                    {initialState.trends.map((item) => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>
        </React.Fragment>
    );
};

export default Home;
