import React, { useState, Component } from "react";
import { render } from "@testing-library/react";
class Notes extends Component{

    // const[data,setdata]=useState(
    //     {
    //         Title:'',
    //         text:''
    //     }
    // )
    // const InputEvent=(event)=>{
    //     const{name,value}=event.target;
    //     setdata((preVal)=>{
    //     return{
    //         ...preVal,
    //         [name]:value,
    //     }
    //     })
    // }
    // const NoteSubmit=(e)=>{
    //     e.preventDefault();  
    //     if(data.Title.value!="")
    //     {
    //         var newItem={
    //            title: data.Title.value,
    //            Text:data.text.value
    //         }
    //     }
    //     data.setState((prevState)=>{
    //         return{
    //             Items:prevState.items.concat(newItem)
    //         }
    //     })
    // }
    constructor(props)
    {
        super(props);
        this.state={
            items:[]
        }
        this.addNote=this.addNote.bind(this);
    }
        addNote(event){
            if(this.theTitle.value!=="")
            {
                var newItem={
                    title:this.theTitle.value,
                    notes:this.theNotes.value
                }
            }
            this.setState((prevState)=>{
                return{
                    items:prevState.items.concat(newItem)
                }
            });
            this.theNotes.value="";
            this.theTitle.value="";
            event.preventDefault();
        }
    
        render()
        {
    return(
    <div class="container my-3">
        <h2>Want to add Notes</h2>
        <form onSubmit={this.addNote}>
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <h5 className="card-title">Add title</h5>
                    <input type="text"
                     className="form-control"
                    //   id="addTitle" 
                    //  name="Title"
                    //  value={data.Title}
                    //  onChange={InputEvent}
                        placeholder="Enter title"
                            ref={(title)=>this.theTitle=title}
                        />
                </div>
                <h5 className="card-title">Add a note</h5>
                <div className="form-group">
                    <textarea className="form-control" 
                    id="addTxt" rows="3"
                        //  name="text"
                        //  value={data.text}
                        //  onChange={InputEvent}
                         placeholder="Enter notes"
                         ref={(notes)=>this.theNotes=notes}
                          >
                    </textarea>
                </div>
                <button className="btn btn-primary" id="addBtn"
                type="submit">
                Add Note
               </button>
            </div>
        </div>
        <hr/>
        <h3>Your Notes</h3>
        <hr/>
        <div id="notes" class="row container-fluid main-content"> 
        <ul>
        {this.state.items.map((val)=><li>{val.title}-{val.notes}</li>)}
        </ul>
        </div>
        </form>
    </div>  )       
}
}

 export default Notes;