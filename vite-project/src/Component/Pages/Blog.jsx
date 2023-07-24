// import { ThemeContext } from "./ContextApi/Context";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useReducer, useEffect, useRef } from "react";

const Blog = () => {
    // const { state } = useContext(ThemeContext);
    const theme = useSelector((state) => state.theme);
    const initialState = {
      isRunning: false,
      time: 0
    };


    const reducer = ()=> {
      switch (action.type) {
        case 'start':
          return{ ...state, isRunning: true};
        case 'stop':
          return{ ...state, isRunning: false};
        case 'reset':
          return{ isRunning: false, time: 0};
        case 'tick':
          return{ ...state, time: state.time + 1};
        default:
          throw new Error()
      }
    }


    const Stopwatch = () => {
      const [state, dispatch] = useReducer(reducer, initialState)
      const idRef = useRef(0);

      useEffect(() => {
        if(!state.isRunning) {
          return;
        }
        idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
          clearInterval(idRef.current);
          idRef.current = 0;
        }
      }, [state.isRunning])
    }



  return (
    
    <>
      <main className="top" style={{ backgroundColor: theme ? "orange" : null }}>
        <div style={{ color: theme ? "white" : null }}>
          <button onClick={() => dispatch({ type: 'start' })}>Start</button>
          <button onClick={() => dispatch({ type: 'start' })}>Stop</button>
          <button onClick={() => dispatch({ type: 'start' })}>Reset</button>
        </div>
      </main>
    </>
  );
};

export default Blog;

{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          consectetur iste repellat non illum asperiores officia quibusdam,
          animi molestiae repudiandae omnis, perspiciatis dolorem ducimus,
          beatae quidem eius officiis commodi. Neque. */}