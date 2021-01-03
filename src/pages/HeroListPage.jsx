import React from "react";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import HeroImg1 from "../images/hero_likee.jpg";
import HeroImg2 from "../images/hero_lili.jpg";
import HeroImg3 from "../images/hero_baichuan.jpg";
import HeroImg4 from "../images/hero_jessica.jpg";



const HeroList = () => {
    const HerosCardData = [
        {
            id: "1",
            name: "狸克",
            image: HeroImg1,
            petPhrase: "怎麼樣狸？"
        },
        {
            id: "2",
            name: "豆狸粒狸",
            image: HeroImg2,
            petPhrase: "咦？好的好的"
        },
        {
            id: "3",
            name: "百川",
            image: HeroImg3,
            petPhrase: "忍忍 忍忍"
        },
        {
            id: "4",
            name: "潔西卡",
            image: HeroImg4,
            petPhrase: "西卡 西卡" 
        }
    ]

    return (
        <StyleHeroList>
             <div className="container">
                 <div className="cards d-flex justify-content-between mb-5">
                    <div className="row mx-auto">
                    {
                        HerosCardData.map((heroCard) => {
                            return(
                                <div className="col-lg-3 col-md-6 col-6 mb-3" key={heroCard.id} >
                                    <HeroCard card={heroCard}></HeroCard>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </StyleHeroList>

    );

   
}

const StyleHeroList = styled.section`
padding-top: 50px;
`;

export default HeroList;