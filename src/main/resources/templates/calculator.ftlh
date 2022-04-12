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

<div class="container text-center">

        <div id="header">
            <h3>Royals Calculator</h3>
        </div>

        <div class="container text-center" id="calculator" style="background-image: url('/static/images/background.png')">

            <div id="display">
                <div id="result"><p>0</p></div>
                <div id="previous"><p>0</p></div>
            </div>

            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="ac" id="ac">AC</button>
                        <button class="btn small-btn" value="ce" id="ce">CE</button>
                        <button class="btn small-btn" value="."  id="tochka">.</button>
                        <button class="btn small-btn" value="/"  id="divide">/</button>
                        <button class="btn notation-btn" value="2 -> 10" id="binToDecimal">2 -> 10</button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="7" id="seven">7</button>
                        <button class="btn small-btn" value="8" id="eight">8</button>
                        <button class="btn small-btn" value="9" id="nine">9</button>
                        <button class="btn small-btn" value="*" id="multi">*</button>
                        <button class="btn notation-btn" value="10 -> 2" id="decimalToBin">10 -> 2</button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="4" id="four">4</button>
                        <button class="btn small-btn" value="5" id="five">5</button>
                        <button class="btn small-btn" value="6" id="six">6</button>
                        <button class="btn small-btn" value="-" id="minus">-</button>
                        <button class="btn notation-btn" value="16 -> 10" id="hexToDecimal">16 -> 10</button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="1" id="one">1</button>
                        <button class="btn small-btn" value="2" id="two">2</button>
                        <button class="btn small-btn" value="3" id="three">3</button>
                        <button class="btn small-btn" value="+" id="plus">+</button>
                        <button class="btn notation-btn" value="10 -> 16" id="decimalToHex">10 -> 16</button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="0" id="zero">0</button>
                        <button class="btn small-btn" value="pi" id="pi">𝝅</button>
                        <button class="btn small-btn" value="exp" id="exp">exp</button>
                        <button class="btn small-btn" value="=" id="equal">=</button>
                        <button class="btn notation-btn" value="16 -> 2" id="hexToBin">16 -> 2</button>
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