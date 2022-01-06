import React from 'react';
import './MainPage.sass'

const Mainpage = () => {
  return (
    <div className="container flex f-column f-center mt-6">
      <div className="w400">
        <h4 className="is-size-3 has-text-centered">Add Todo</h4>
        <form>
          <input
            class="input is-rounded"
            type="text"
            name="input"
            placeholder="Todo name"
          />

          <button
            type="button"
            className="button mt-4 boxed is-rounded is-primary bold-500"
          >
            Add
          </button>
        </form>

        <div className="todos mt-6">
          <h4 className="is-size-3 has-text-centered mb-2">Actice Todos</h4>

          <div className="todos__item flex f-center f-space">
            <div className="flex f-center">
              <div className="mr-3">1</div>

              <div className="bold-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div className="flex">
              <span className="mr-1 icon is-medium">
                <span className="mdi mdi-24px mdi-check-bold pointer has-text-success"></span>
              </span>

              <span className="mr-1 icon is-medium">
                <span className="mdi mdi-24px mdi-alert pointer has-text-warning"></span>
              </span>

              <span className="icon is-medium">
                <span className="mdi mdi-24px mdi-delete pointer has-text-black"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
