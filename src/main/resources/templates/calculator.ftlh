<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
              crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

        <link rel="stylesheet" href="/static/css/style.css">
        <script src="/static/js/main.js"></script>
    </head>

    <body>

<div class="container text-center" style="background-image: url('/static/images/background.png')">

        <div id="header">
            <h3>Royals Calculator</h3>
        </div>

        <div class="container text-center" id="calculator" style="background-image: url('/static/images/display.png')">

            <div id="display">
                <div id="result"><p>0</p></div>
                <div id="previous"><p>0</p></div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="ac" id="ac" style="background-image: url('/static/images/ac.png')"></button>
                        <button class="btn small-btn" value="ce" id="ce" style="background-image: url('/static/images/ce.png')"></button>
                        <button class="btn small-btn" value="."  id="tochka" ></button>
                        <button class="btn small-btn" value="/"  id="divide" style="background-image: url('/static/images/divide.png')">/</button>
                        <button class="btn notation-btn" value="2 -> 10" id="binToDecimal" style="background-image: url('/static/images/binToDecimal.png')"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="7" id="seven" style="background-image: url('/static/images/seven.png')"></button>
                        <button class="btn small-btn" value="8" id="eight" style="background-image: url('/static/images/eight.png')"></button>
                        <button class="btn small-btn" value="9" id="nine" style="background-image: url('/static/images/nine.png')"></button>
                        <button class="btn small-btn" value="*" id="multi" ></button>
                        <button class="btn notation-btn" value="10 -> 2" id="decimalToBin" style="background-image: url('/static/images/decimalToBin.png')"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="4" id="four" style="background-image: url('/static/images/four.png')"></button>
                        <button class="btn small-btn" value="5" id="five" style="background-image: url('/static/images/five.png')"></button>
                        <button class="btn small-btn" value="6" id="six" style="background-image: url('/static/images/six.png')"></button>
                        <button class="btn small-btn" value="-" id="minus" style="background-image: url('/static/images/minus.png')"></button>
                        <button class="btn notation-btn" value="16 -> 10" id="hexToDecimal" style="background-image: url('/static/images/hexToDecimal.png')"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="1" id="one" style="background-image: url('/static/images/one.png')">1</button>
                        <button class="btn small-btn" value="2" id="two" style="background-image: url('/static/images/two.png')">2</button>
                        <button class="btn small-btn" value="3" id="three" style="background-image: url('/static/images/three.png')">3</button>
                        <button class="btn small-btn" value="+" id="plus">+</button>
                        <button class="btn notation-btn" value="10 -> 16" id="decimalToHex">10 -> 16</button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="0" id="zero" style="background-image: url('/static/images/zero.png')"></button>
                        <button class="btn small-btn" value="pi" id="pi" style="background-image: url('/static/images/pi.png')"></button>
                        <button class="btn small-btn" value="exp" id="exp" style="background-image: url('/static/images/exp.png')"></button>
                        <button class="btn small-btn" value="=" id="equal" style="background-image: url('/static/images/equal.png')"></button>
                        <button class="btn notation-btn" value="16 -> 2" id="hexToBin" style="background-image: url('/static/images/hexToBin.png')"></button>
                    </div>
                </div>


                <div class="col-md-auto d-grid gap-2">
                    <div class="row justify-content-md-center">
                        <button class="btn solve-equation-btn" value="solve-equation">Решить ур-ие</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </body>
</html>