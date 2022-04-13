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

    <body style="background: url('/static/images/background.png') no-repeat">

<div class="container text-center">

        <div id="header">
            <h3>Royals Calculator 3</h3>
        </div>

        <div class="container text-center" id="calculator" style="background: url('/static/images/calculator.png') no-repeat">

            <div id="display" style="background: url('/static/images/display.png') no-repeat">
                <div id="result"><p>0</p></div>
                <div id="previous"><p>0</p></div>
            </div>

            <input placeholder="asdasda" size="40">

            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="ac" id="ac" style="background: url('/static/images/ac.png') no-repeat"></button>
                        <button class="btn small-btn" value="ce" id="ce" style="background: url('/static/images/ce.png') no-repeat"></button>
                        <button class="btn small-btn" value="."  id="tochka" style="background: url('/static/images/mark.png') no-repeat"></button>
                        <button class="btn small-btn" value="/"  id="divide" style="background: url('/static/images/divide.png') no-repeat"></button>
                        <button class="btn notation-btn" value="2 -> 10" id="binToDecimal" style="background: url('/static/images/binToDecimal.png') no-repeat"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="7" id="seven" style="background: url('/static/images/seven.png') no-repeat"></button>
                        <button class="btn small-btn" value="8" id="eight" style="background: url('/static/images/eight.png') no-repeat"></button>
                        <button class="btn small-btn" value="9" id="nine" style="background: url('/static/images/nine.png') no-repeat"></button>
                        <button class="btn small-btn" value="*" id="multi" style="background: url('/static/images/multi.png') no-repeat"></button>
                        <button class="btn notation-btn" value="10 -> 2" id="decimalToBin" style="background: url('/static/images/decimalToBin.png') no-repeat"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="4" id="four" style="background: url('/static/images/four.png') no-repeat"></button>
                        <button class="btn small-btn" value="5" id="five" style="background: url('/static/images/five.png') no-repeat"></button>
                        <button class="btn small-btn" value="6" id="six" style="background: url('/static/images/six.png') no-repeat"></button>
                        <button class="btn small-btn" value="-" id="minus" style="background: url('/static/images/minus.png') no-repeat"></button>
                        <button class="btn notation-btn" value="16 -> 10" id="hexToDecimal" style="background: url('/static/images/hexToDecimal.png') no-repeat"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="1" id="one" style="background: url('/static/images/one.png') no-repeat"></button>
                        <button class="btn small-btn" value="2" id="two" style="background: url('/static/images/two.png') no-repeat"></button>
                        <button class="btn small-btn" value="3" id="three" style="background: url('/static/images/three.png') no-repeat"></button>
                        <button class="btn small-btn" value="+" id="plus" style="background: url('/static/images/plus.png') no-repeat"></button>
                        <button class="btn notation-btn" value="10 -> 16" id="decimalToHex" style="background: url('/static/images/decimalToHex.png') no-repeat"></button>
                    </div>
                    <div class="row justify-content-md-center">
                        <button class="btn small-btn" value="0" id="zero" style="background: url('/static/images/zero.png') no-repeat"></button>
                        <button class="btn small-btn" value="pi" id="pi" style="background: url('/static/images/pi.png') no-repeat"></button>
                        <button class="btn small-btn" value="exp" id="exp" style="background: url('/static/images/exp.png') no-repeat"></button>
                        <button class="btn small-btn" value="=" id="equal" style="background: url('/static/images/equal.png') no-repeat"></button>
                        <button class="btn notation-btn" value="16 -> 2" id="hexToBin" style="background: url('/static/images/hexToBin.png') no-repeat"></button>
                    </div>
                </div>


                <div class="col-md-auto d-grid gap-2">
                    <div class="row justify-content-md-center">
                        <button class="btn solve-equation-btn" id="eq" value="solve-equation" style="background: url('/static/images/solve.png') no-repeat"></button>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </body>
</html>