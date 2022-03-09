import React from "react";

// const WithClass = (props) => {
//     return (
//         <div className={props.classes}>
//             {props.children}
//         </div>
//     )
// }

// function with stateless component
// const withClass = (WrappedComponent, classes) => {
//     return (props) => {
//         return (
//             <div className={classes}>
//                 <WrappedComponent {...props} />
//             </div>
//         )
//     }
// }

// function with statelfull component

const withClass = (WrappedComponent, classes) => {
    return class extends React.Component {
        render() {
            return (
                <div className={classes}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}
export default withClass;