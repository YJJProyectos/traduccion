import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { IWindow } from '../interface/iwindow';
import { TouchSequence } from 'selenium-webdriver';
import { TraduccionService } from '../services/traduccion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultados: boolean = false;
  recognition: any;
  synth: any;
  utterThis: any;
  recognizing: boolean;
  rutaMic: string;
  suscripcion;
  buscando : boolean = false;
  escuchandoGrabacion: boolean = false;
  aPronunciar : string = "你好";
  resultadoBusqueda: string;
  textoGrabado : string = '';
  arrayTextoGrabado: string[] = [];
  @ViewChild('textoBusqueda', {static: true}) textoBusqueda: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef, private traduccionService : TraduccionService) {
    let langs =
      [['Afrikaans', ['af-ZA']],
      ['አማርኛ', ['am-ET']],
      ['Azərbaycanca', ['az-AZ']],
      ['বাংলা', ['bn-BD', 'বাংলাদেশ'],
        ['bn-IN', 'ভারত']],
      ['Bahasa Indonesia', ['id-ID']],
      ['Bahasa Melayu', ['ms-MY']],
      ['Català', ['ca-ES']],
      ['Čeština', ['cs-CZ']],
      ['Dansk', ['da-DK']],
      ['Deutsch', ['de-DE']],
      ['English', ['en-AU', 'Australia'],
        ['en-CA', 'Canada'],
        ['en-IN', 'India'],
        ['en-KE', 'Kenya'],
        ['en-TZ', 'Tanzania'],
        ['en-GH', 'Ghana'],
        ['en-NZ', 'New Zealand'],
        ['en-NG', 'Nigeria'],
        ['en-ZA', 'South Africa'],
        ['en-PH', 'Philippines'],
        ['en-GB', 'United Kingdom'],
        ['en-US', 'United States']],
      ['Español', ['es-AR', 'Argentina'],
        ['es-BO', 'Bolivia'],
        ['es-CL', 'Chile'],
        ['es-CO', 'Colombia'],
        ['es-CR', 'Costa Rica'],
        ['es-EC', 'Ecuador'],
        ['es-SV', 'El Salvador'],
        ['es-ES', 'España'],
        ['es-US', 'Estados Unidos'],
        ['es-GT', 'Guatemala'],
        ['es-HN', 'Honduras'],
        ['es-MX', 'México'],
        ['es-NI', 'Nicaragua'],
        ['es-PA', 'Panamá'],
        ['es-PY', 'Paraguay'],
        ['es-PE', 'Perú'],
        ['es-PR', 'Puerto Rico'],
        ['es-DO', 'República Dominicana'],
        ['es-UY', 'Uruguay'],
        ['es-VE', 'Venezuela']],
      ['Euskara', ['eu-ES']],
      ['Filipino', ['fil-PH']],
      ['Français', ['fr-FR']],
      ['Basa Jawa', ['jv-ID']],
      ['Galego', ['gl-ES']],
      ['ગુજરાતી', ['gu-IN']],
      ['Hrvatski', ['hr-HR']],
      ['IsiZulu', ['zu-ZA']],
      ['Íslenska', ['is-IS']],
      ['Italiano', ['it-IT', 'Italia'],
        ['it-CH', 'Svizzera']],
      ['ಕನ್ನಡ', ['kn-IN']],
      ['ភាសាខ្មែរ', ['km-KH']],
      ['Latviešu', ['lv-LV']],
      ['Lietuvių', ['lt-LT']],
      ['മലയാളം', ['ml-IN']],
      ['मराठी', ['mr-IN']],
      ['Magyar', ['hu-HU']],
      ['ລາວ', ['lo-LA']],
      ['Nederlands', ['nl-NL']],
      ['नेपाली भाषा', ['ne-NP']],
      ['Norsk bokmål', ['nb-NO']],
      ['Polski', ['pl-PL']],
      ['Português', ['pt-BR', 'Brasil'],
        ['pt-PT', 'Portugal']],
      ['Română', ['ro-RO']],
      ['සිංහල', ['si-LK']],
      ['Slovenščina', ['sl-SI']],
      ['Basa Sunda', ['su-ID']],
      ['Slovenčina', ['sk-SK']],
      ['Suomi', ['fi-FI']],
      ['Svenska', ['sv-SE']],
      ['Kiswahili', ['sw-TZ', 'Tanzania'],
        ['sw-KE', 'Kenya']],
      ['ქართული', ['ka-GE']],
      ['Հայերեն', ['hy-AM']],
      ['தமிழ்', ['ta-IN', 'இந்தியா'],
        ['ta-SG', 'சிங்கப்பூர்'],
        ['ta-LK', 'இலங்கை'],
        ['ta-MY', 'மலேசியா']],
      ['తెలుగు', ['te-IN']],
      ['Tiếng Việt', ['vi-VN']],
      ['Türkçe', ['tr-TR']],
      ['اُردُو', ['ur-PK', 'پاکستان'],
        ['ur-IN', 'بھارت']],
      ['Ελληνικά', ['el-GR']],
      ['български', ['bg-BG']],
      ['Pусский', ['ru-RU']],
      ['Српски', ['sr-RS']],
      ['Українська', ['uk-UA']],
      ['한국어', ['ko-KR']],
      ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
        ['cmn-Hans-HK', '普通话 (香港)'],
        ['cmn-Hant-TW', '中文 (台灣)'],
        ['yue-Hant-HK', '粵語 (香港)']],
      ['日本語', ['ja-JP']],
      ['हिन्दी', ['hi-IN']],
      ['ภาษาไทย', ['th-TH']]];
  }

  ngOnInit() {
    this.synth = window.speechSynthesis;
    this.utterThis = new SpeechSynthesisUtterance();
    this.rutaMic = "assets/img/mic.gif";
    this.utterThis.lang = "zh-CN";

    this.resultados = false;
    this.recognizing = false;

    if (!('webkitSpeechRecognition' in window)) {
    } else {
      const { webkitSpeechRecognition }: IWindow = <IWindow><unknown>window;
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;


      this.recognition.onstart = () => {
        this.recognizing = true;
        this.escuchandoGrabacion = true;
        console.log("START");
        console.log(this.escuchandoGrabacion);
        //showInfo('info_speak_now');
        this.rutaMic = 'assets/img/mic-animate.gif';
      }

      this.recognition.onerror = (event) => {
        if (event.error == 'no-speech') {
          //start_img.src = 'img/mic.gif';
          //showInfo('info_no_speech');
          //ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
          //start_img.src = 'img/mic.gif';
          //showInfo('info_no_microphone');
          //ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
          //if (event.timeStamp - start_timestamp < 100) {
          //showInfo('info_blocked');
          //} else {
          //showInfo('info_denied');
          //}
          //ignore_onend = true;
        }
      };

      this.recognition.onend = () => {
        console.log("on end");
        this.recognizing = false;
        this.arrayTextoGrabado = [];
        /*if (ignore_onend) {
          return;
        }*/
        this.escuchandoGrabacion = false;
        this.rutaMic = 'assets/img/mic.gif';
        if (this.verificarGrabacion()) {
          document.getElementById("resultado").innerHTML = "OK"
        } else {
          document.getElementById("resultado").innerHTML = "NO OK"
        }
        /*if (!final_transcript) {
            return;
        }*/
        for (let index = 0; index < this.textoGrabado.length; index++) {
          const element = this.textoGrabado[index];
          this.arrayTextoGrabado.push(element);
        }
        console.log(this.arrayTextoGrabado.length);
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
      };

      this.recognition.onresult = (event) => {
        var interim_transcript = '';
        var final_transcript = '';
        this.textoGrabado  = '';
        if (typeof (event.results) == 'undefined') {
          console.log("STOP");
          this.recognition.onend = (null);
          this.recognition.stop();

          return;
        }
        console.log('RESULTADOS' ,  event.results);
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
          if (this.verificarGrabacion()) {
            document.getElementById("resultado").innerHTML = "OK";
            this.textoGrabado = final_transcript;
            this.recognition.stop();
            break;
          } else {
            document.getElementById("resultado").innerHTML = "NO OK";
          }
          if (event.results[i].isFinal) {
            this.textoGrabado = final_transcript;
            this.recognition.stop();
            break;
          }
        }

        //document.getElementById("texto").innerHTML = final_transcript;

      };
    }

  }


  startButton(event) {
    if (this.recognizing) {
      this.recognition.stop();
      return;
    }
    //final_transcript = '';
    this.recognition.lang = 'cmn-Hans-CN';
    this.recognition.start();
    this.rutaMic = 'assets/img/mic-animate.gif';
    //ignore_onend = false;

  }




  verificarGrabacion() {
    console.log("VERIFICA GRABACION");
    //console.log(document.getElementById("texto").innerHTML);
    //console.log(document.getElementById("texto-pronunciar").innerHTML);

    return this.textoGrabado == this.aPronunciar;
  }

  speak(texto) {
    this.recognition.stop();
    this.utterThis.text = texto;
    this.synth.speak(this.utterThis);
  }

  escuchar() {
    //this.speak(document.getElementById("texto").innerHTML);
    this.speak(this.textoGrabado);
  }

  escucharResultado() {
    if (this.resultados) {
      this.speak(document.getElementById("resultado-busqueda").innerHTML);
    }
  }

  escucharTexto() {
    this.speak(document.getElementById("texto-pronunciar").innerHTML);

  }

  /*function buscar() {
    var url = "https://www.google.com/inputtools/request?ime=pinyin&ie=utf-8&oe=utf-8&app=translate&num=10&text=";
    if (document.getElementById("texto-busqueda").value.trim() != "") {
        console.log("buscando " + document.getElementById("texto-busqueda").value);
        axios.get(url + document.getElementById("texto-busqueda").value)
            .then(function (res) {
                if (res.status == 200) {
                    console.log(res)
                    var respuesta = res.data[1][0][1][0];
                    console.log(res.data[1][0][1][0]);
                    if (respuesta != undefined) {
                        resultados = true;
                        document.getElementById("resultado-busqueda").innerHTML = respuesta;
  
                    } else {
                        resultados = false;
                        document.getElementById("resultado-busqueda").innerHTML = "No se encontro resultado";
                    }
  
                } else if (res.status == 201) {
  
                }
            })
            .catch(function (err) {
                console.log(err);
            })
            .then(function () {
  
            });
    }
  
  
  }*/

  buscar() {
    if (this.textoBusqueda.nativeElement.value.trim() != "") {
      if ( this.suscripcion != null ) {
        this.suscripcion.unsubscribe();
      }
      this.buscando = true;
      this.suscripcion = this.traduccionService.busquedaCaracteres(this.textoBusqueda.nativeElement.value.trim()).subscribe(
        (data) => {
        console.log(data);
        this.buscando = false;
        var respuesta = data[1][0][1][0]; // falta mapear
        console.log(data[1][0][1][0]);
        if (respuesta != undefined) {
            this.resultados = true;
            document.getElementById("resultado-busqueda").innerHTML = respuesta;
            this.resultadoBusqueda = respuesta;

        } else {
            this.resultados = false;
            document.getElementById("resultado-busqueda").innerHTML = "No se encontro resultado";
        }
      }, (error) => {
        this.buscando = false;
        console.log("error" , error);
      })
    }
  }

}
