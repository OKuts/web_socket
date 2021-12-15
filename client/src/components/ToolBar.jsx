import React from 'react';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const ToolBar = () => {
    const changeColor = e => {
        toolState.setFillColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <button
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
                className="toolbar__btn toolbar__brush"/>
            <button
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
                className="toolbar__btn toolbar__rect"/>
            <button
                onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
                className="toolbar__btn toolbar__circle"/>
            <button
                onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
                className="toolbar__btn toolbar__eraser"/>
            <button
                onClick={() => toolState.setTool(new Line(canvasState.canvas))}
                className="toolbar__btn toolbar__line"/>
            <input onChange={e => changeColor(e)} style={{marginLeft: 10}} type="color"/>
            <button
                className="toolbar__btn toolbar__undo"/>
            <button
                className="toolbar__btn toolbar__redo"/>
            <button
                className="toolbar__btn toolbar__save"/>
        </div>
    );
};

export default ToolBar;