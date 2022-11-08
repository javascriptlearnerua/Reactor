const inputClick = () => alert('clicked');
const mouseOver = () => console.log('mouse over');
const helpText = "Help text";

const inp = (
    <div className="main-section">
        <h1>Hello React!</h1>
        <input 
            placeholder={helpText}
            onClick={inputClick} 
            onMouseEnter={mouseOver}
        />
    </div>
);

const app = document.getElementById("app");


ReactDOM.render(inp, app);