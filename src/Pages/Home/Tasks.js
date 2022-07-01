import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Tasks = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen bg-violet-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
          <h1 class="text-2xl text-center  ">CALEANDER</h1>
            <div class="py-1">
            <DayPicker 
                  mode="single"
                  selected={date}
                  onSelect={setDate}
            />
            </div>
            <p className="text-center ">You have selected : {format(date,'PP')}</p>
          </div>
          <div class="card flex-shrink-0 w-full text-center max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <h1 class="text-2xl  text-primary ">ADD TASKS</h1>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Add task"
                  class="input input-bordered"
                />
                <h1 class="text-1xl text-primary font-bold">MY TASKS</h1>

<div class="form-control">
  <label class="label cursor-pointer">
    <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
    <span class="label-text">Task</span> 
    <button class="btn btn-outline btn-primary">Edit</button>
  </label>
  <label class="label cursor-pointer">
    <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
    <span class="label-text">Task</span> 
    <button class="btn btn-outline btn-primary">Edit</button>
  </label>
  <label class="label cursor-pointer">
    <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
    <span class="label-text">Task</span> 
    <button class="btn btn-outline btn-primary">Edit</button>
  </label>
  <label class="label cursor-pointer">
    <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
    <span class="label-text">Task</span> 
    <button class="btn btn-outline btn-primary">Edit</button>
  </label>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
