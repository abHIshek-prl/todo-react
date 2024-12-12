import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

import Backgnd from "../assets/Backgnd.png";
import { Button, Navbar } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import Navbar1 from "../components/Navbar1";


function Todo() {
    const [Add, Input] = useState("");
    function addInput(event) {
        Input(event.target.value);
    }

    const [Todos, TodosAre] = useState([]);

    function Addtodo() {
        if (Add == "") {
            alert("plese enter a task");
        } else {
            TodosAre([...Todos , {list : Add , id : Date.now() , Status : false} ]);
            Input("");
        }
    }

    function inSubmit(e) {
        e.preventDefault();
    }

    function Delt (id) {
      TodosAre( Todos.filter((x) =>  x.id !== id ))
      
    };

    return (
        <>
            <Navbar1/>
            <Sidebar/>
            
            
            <div
                className="flex flex-col items-center justify-center w-full h-screen gap-3"
                style={{ backgroundImage: `url(${Backgnd})` }}
            >
                <div className="h-[10%] w-[50%]  flex items-center justify-center">
                    <p className="font-mono text-2xl font-bold text-white">QuickList</p>
                </div>
                <div className="h-[75%] w-[70%] flex  shadow-inner rounded-2xl shadow-[#cdcdcd] justify-center items-center">
                    <div className="h-[87%] w-[92%]  overflow-scroll scrollbar-hide text-white">
                        <form className="w-full h-full" onSubmit={inSubmit}>
                            <div className="h-[13%] w-[100%] flex gap-[2%]">
                                <input
                                    type="text"
                                    value={Add}
                                    placeholder="Add Tasks "
                                    onChange={addInput}
                                    className="w-full h-full font-semibold text-center bg-transparent border-2 border-white rounded-2xl te-xt-black"
                                />
                                <Button variant="outline-light" className="h-[100%] w-[15%] rounded-xl" onClick={Addtodo}>
                                    Add
                                </Button>
                            </div>
                            <p></p>
                            <br />
                            <div className="w-full h-auto">
                                <ul className="flex flex-col justify-center gap-4 ite-ms-center" type="number">
                                    {Todos.map((dos) => (
                                        <div className="w-full h-full">
                                            <li className="w-full h-10">
                                                <div className="flex w-full h-full">
                                                    <div className="h-full w-[90%] font-semibold text-lg">{dos.list}</div>
                                                    <div className="h-full w-[10%] flex text-lg justify-center items-center">
                                                        
                                                        <MdDeleteForever className="text-red-600 cursor-pointer" onClick={()=>Delt(dos.id)}/>
                                                        
                                                        {/* <IoCheckmarkDoneSharp className="text-[Green]"  onClick={()=>Edt(dos.id)}/> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;
