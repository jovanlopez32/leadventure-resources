1.- Could you kindly change the padding of .first-row so that instead of looking like this:
https://prnt.sc/Elq-0cCWTXCe
it looks something like this:
https://prnt.sc/n_0lENTGY4CW
This helps the text to be centered and not have a big space in the hero, replace
.first-row {
 padding: 300px 0;
}
by
.first-row {
 min-height: 60vh;
 padding: 60px 20px;
 box-sizing: border-box;
}

2.- In mobile and tablet view, remove the big spacing between the elements: https://prnt.sc/U4X40aC1nwat