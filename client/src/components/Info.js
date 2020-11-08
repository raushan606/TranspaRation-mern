import React, { Component } from 'react';
import {
    Media
  } from "reactstrap";

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abouts: [
                {
                    id:1,
                    name:"Abhishek Kumar",
                    image:"../images/abhi.png",
                    disp:"Front-end developer ,The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site."
                 },
                {
                    id:1,
                    name:"Raushan  Kumar",
                    image:"../images/rau.png",
                    disp:"Back-end developer The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site."
                 },
                {
                    id:1,
                    name:"Kumari Shivani Singh",
                    image:"../images/Shi.png",
                    disp:" front-end Developer The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site."
                 },
                {
                    id:1,
                    name:"Karan Kumar Singh",
                    image:"../images/abhi.png",
                    disp:"Database"
                 },
                
              
        
               ],
        };
    }
   
    render() {
        const  info= this.state.abouts.map((about) => {
            return (
                <div className="container">
                <div key={about.id} clasName="col-12 mx-5 ">
                
                <Media className="media" tag="li">
                   
                  <Media left middle>
                      <Media  className="media-img" style={{ width: "13rem" }} object src={about.image} alt={about.name} />
                  </Media>
                  <Media className="media-body" body className="ml-5">
                    <Media heading>{about.name}</Media>
                    <p className="media-para">{about.disp}</p>
                  </Media>
                 
                </Media>
                
      
              </div>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
            <Media list>

                  {info}
            </Media>
             
            </div>
          </div>
        );
    }
}