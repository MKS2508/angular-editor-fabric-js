import { Component, ViewChild } from '@angular/core';
import { FabricjsEditorComponent } from 'projects/angular-editor-fabric-js/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-editor-fabric-js';

  @ViewChild('canvas', {static: false}) canvas: FabricjsEditorComponent;


  /** 
    Este metodo exporta a img
  */ 
  public rasterizar() { 
    //this.canvas.rasterize();
  }

  /** 
    Este metodo exporta a SVG
  */ 
  public rasterizeSVG() {
 //   this.canvas.rasterizeSVG();
  }

  public nuevaFigura(figure) {
       this.canvas.nuevaFigura(figure);
     }

  /** 
  * Este metodo exporta a JSON, de aqui hay que sacar las coordenadas
  */
  public saveCanvasToJSON() {
    this.canvas.saveCanvasToJSON();
  }

  /** 
  * Este metodo permite importar una figura desde el JSON.
  */
  public loadCanvasFromJSON() {
    this.canvas.loadCanvasFromJSON();
  }

  /** 
  * Este metodo limpia el canvas
  */ 
  public confirmClear() {
    this.canvas.confirmClear();
  }

/** 
  * Este metodo edita el canvas.size.height, canvas.size.width
  */
  public changeSize() {
    this.canvas.changeSize();
  }

  /** 
 *   Este metodo agrega texto al canvas
  */
  public addText() {
    this.canvas.addText();
  }

  /** 
   Este metodo permite agregar archivos SVG predefinidos
   @param event
  */
  public getImgPolaroid(event) {
    //this.canvas.getImgPolaroid(event);
  }
  
  /** 
   Este metodo permite subir archivos IMG y agregarlos al canvas
   @param url
  */
  public addImageOnCanvas(url) {
    //this.canvas.addImageOnCanvas(url);
  }

  /** 
   Este metodo permite subir archivos IMG y agregarlos al canvas
   @param url
  */
  public readUrl(event) {
  //  this.canvas.readUrl(event);
  }

  /** 
   Este metodo permite eliminar los archivos IMG subidos
   @param url
  */
  public removeWhite(url) {
   // this.canvas.removeWhite(url);
  }

  /** 
   Este metodo agregar figuras predefinidas, cuadrado, circulo.
   @param figura
  */
  public addFigure(figure) {
    this.canvas.addFigure(figure);
  }

  /**
   * Este metodo elimina el elemento seleccionado.
   */
  public removeSelected() {
    this.canvas.removeSelected();
  }

  /**
   * Este metodo supuestamente manda la figura seleccionada a la parte trasera, pero no va
   */
  public sendToBack() {
    this.canvas.sendToBack();
  }

   /**
   * Este metodo supuestamente manda la figura seleccionada a la parte delantera, pero no va
   */
  public bringToFront() {
    this.canvas.bringToFront();
  }

  /**
   * Este metodo duplica el elemento seleccionado
   */
  public clone() {
    this.canvas.clone();
  }

  /**
   * Este metodo des-selecciona el elemento seleccionado
   */
  public cleanSelect() {
    this.canvas.cleanSelect();
  }

  /**
   * Este metodo define el relleno del canvas, canvas.props.canvasFill
   * @param color en hex, con  color picker
   */
  public setCanvasFill() {
    this.canvas.setCanvasFill();
  }
  /**
   * Este metodo define el relleno del canvas, canvas.props.canvasImage
   * @param url IMG
   */
  public setCanvasImage() {
    this.canvas.setCanvasImage();
  }

  /**
   * Este metodo asigna un ID a cada elemento cuando se agrega al Canvas, canvas.props.id.
   * Nos permite editarlo, los grupos (SVG), no tienen ID.
   */
  public setId() {
    this.canvas.setId();
  }

  /**
   * Este metodo define la opacidad de un elemento seleccionado, canvas.props.opacity, mientras este no sea un grupo (SVG).
   */
  public setOpacity() {
    this.canvas.setOpacity();
  }

  /**
   * Este metodo define el relleno (color) de un elemento seleccionado, canvas.props.fill, mientras este no sea un grupo (SVG).
   */
  public setFill() {
    this.canvas.setFill();
  }

  
  /**
   * Este metodo define la fuente de texto de un elemento TEXT seleccionado, canvas.props.fontFamily, de entre una lista.
   */
  public setFontFamily() {
    this.canvas.setFontFamily();
  }

  /**
   * Este metodo define al alineacion de texto de un elemento TEXT seleccionado, canvas.props.textAlign, de entre left, justify, center y right.
   * @param tipoAlineacion
   */
  public setTextAlign(value) {
    this.canvas.setTextAlign(value);
  }

  /**
   * Este metodo define si un elemento de texto seleccionado, esta en negrita o no, canvas.props.fontWeight. 
   */
  public setBold() {
    this.canvas.setBold();
  }

   /**
   * Este metodo define si un elemento de texto seleccionado, esta en cursiva o no, canvas.props.fontStyle. 
   */
  public setFontStyle() {
    this.canvas.setFontStyle();
  }

  /**
   * Este metodo define si un elemento de texto seleccionado, tiene decoracion de texto, es decir, si esta subrayado o similar
   * @param tipoDecoracion 
   */
  public hasTextDecoration(value) {
    this.canvas.hasTextDecoration(value);
  }

  
  /**
   * Este metodo asigna decoracion a un elemento de texto seleccionado. 
   * @param tipoDecoracion 
   */
  public setTextDecoration(value) {
    this.canvas.setTextDecoration(value);
  }

  /**
   * Este metodo define el tamano de la fuente de un elemento de texto seleccionado, canvas.props.fontSize.
   */
  public setFontSize() {
    this.canvas.setFontSize();
  }

  /**
   * Este metodo define el line Height, canvas.props.lineHeight
   */
  public setLineHeight() {
    this.canvas.setLineHeight();
  }

  /**
   * Este metodo define el espaciado entre caracteres de un elemento de texto seleccionado, canvas.props.charSpacing.
   */
  public setCharSpacing() {
    this.canvas.setCharSpacing();
  }

  /**
   * Este metodo genera un JSON con los elementos del canvas.
   */
  public rasterizeJSON() {
    this.canvas.rasterizeJSON();
  }
}
