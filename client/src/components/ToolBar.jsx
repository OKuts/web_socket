import React from 'react';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";

const ToolBar = () => {
    return (
        <div className="toolbar">
            <button
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
                className="toolbar__btn toolbar__brush"/>
            <button
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
                className="toolbar__btn toolbar__rect"/>
            <button className="toolbar__btn toolbar__circle"/>
            <button className="toolbar__btn toolbar__eraser"/>
            <button className="toolbar__btn toolbar__line"/>
            <input type="color"/>
            <button className="toolbar__btn toolbar__undo"/>
            <button className="toolbar__btn toolbar__redo"/>
            <button className="toolbar__btn toolbar__save"/>
        </div>
    );
};

export default ToolBar;