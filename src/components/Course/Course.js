import React from 'react';

const Course = (props) => {
    const { name, price, img } = props.course;
    const handleAddCourse = props.handleAddCourse;
    const divStyle = { border: '2px solid #ddd', borderRadius: '5px', width: '700px', padding: '10px', margin: '20px', display: 'flex', alignItems: 'center' };
    const imgStyle = { width: '150px', height: '150px' }
    return (
        <div style={divStyle} className="mx-auto shadow" >
            <div style={{ width: '200px' }}>
                <img src={img} style={imgStyle} alt="sample img" className="img-fluid img-thumbnail rounded" />
            </div>
            <div style={{ width: '500px' }}>
                <h3 className="text-info">{name}</h3>
                <h5>Price : <span className="text-success">${price}</span></h5>
                <button className="btn btn-success shadow" onClick={() => handleAddCourse(props.course)}>Enroll now</button>
            </div>
        </div>
    );
};

export default Course;