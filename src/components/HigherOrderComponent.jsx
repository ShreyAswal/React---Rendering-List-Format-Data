import React, { Component } from "react";


// console.log("Outside")



export default class higherOrderComponents extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                
                    { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                    { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                    { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                    { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                    { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}          
            ]
        }
        console.log(this.state.userData[1].age)
    }

    prototype(heading,body){
        return(
            <React.Fragment>
                <h1>{heading}</h1>
                <br></br>
                <div className="display-box">
                <ul>{body}</ul>
                </div>
            </React.Fragment>
        )
    }

    listOrderedData = (props) => {
        const data = props;
        // console.log(data)
        const items = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id } </span>
                    <span>Name : {item.name} </span>
                    <span>User_Type: {item.user_type} </span>
               </li>
               {/* <br></br> */}
            </React.Fragment>
        ))
        // console.log("Inside")

        return items
    
    }


    renderAllItems = (props) => {
        // const data = this.state.userData; 
        const mapRows = this.listOrderedData(props)

        return mapRows;
    };

    filterByUserData (props) {
        // const data = this.state.userData;
        const users = props.filter((user) => (
            user.user_type === 'Designer'
        ))
        // const designers = users.listOrderedData
        // console.log(designers)

        return this.listOrderedData(users);
    }
    

    filterByFirstLetter (props,list) {
        
        const FirstLetterNames = list.filter((each) => 
            // console.log(props),
            each.name[0] === props
            
            
        )
        console.log(FirstLetterNames)
        return this.listOrderedData(FirstLetterNames);
    }
 
    filterByAge = (props) => {
        const OnAge = props.filter((each) => 
            each.age > 28 && each.age <= 50
        )
        console.log(OnAge)
        return this.listOrderedData(OnAge)
    }

    addAllAge = (props) => {
        const addAge = props.filter((each) => 
            each.user_type === "Designer"
        ).reduce((sum,each) => {
            console.log(sum)
            return sum += each.years

        },0)
        
        return addAge
    }




    render() {
        return (
          <React.Fragment>
            {/* <h1>Display all items</h1> */}

            {this.prototype("Display all items",this.renderAllItems(this.state.userData))}
            {this.prototype("Display based on user_type",this.filterByUserData(this.state.userData))}
            {this.prototype("Filter All Data Starting with the letter J",this.filterByFirstLetter('J',this.state.userData))}
            {this.prototype("Filter Data Based On Age",this.filterByAge(this.state.userData))}
            {this.prototype("Sum Of Years Of Designers",this.addAllAge(this.state.userData))}
          </React.Fragment>
        )
    }

}









