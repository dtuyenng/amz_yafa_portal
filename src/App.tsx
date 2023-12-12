import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="title">Amazon Product Portal</div>
      <div id="searchBar">
        <input placeholder="Item#"></input>
        <input placeholder="ASIN"></input>
        <input placeholder="SKU"></input>
      </div>
      <div id="content">
        <div className="gallery">
          <img
            className="mainPicture"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSFRUSFRUZGBUaGBoaGhgYFRoVEhgYGRgZGRoYGBgdIS4mHCErHxoWJjgmLS8xNTU1HCQ9QDs0Py40NTQBDAwMEA8QHhISHjQsISs0NDE0MTQ0NDQ2PzQ0NDQxNjQ2NDQxNDQ0PTE0NDQ0NzQ0NDE1NTE0NDE0NDExPTQ0NP/AABEIANcA6gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwUHBAj/xABEEAACAQIEAwYDBQYEAwkBAAABAgADEQQFEiEGMUETIjJRYXEHgaFCUmKRsRQjgqLB8DNyktGTwuEXJENEU1RjsvEV/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EACURAQACAgICAgEFAQAAAAAAAAABAgMRBBIhMRNRQSIyYaHBgf/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBERAREoTASH8Y8XLhAadMg1ep5hf+s9mb8QBVZVV7ci2oUyB1Kggn5kD0nMs6y7C4jUaeJelVJ2GJKmi552FVLaPdhaa/lp21vy2fFfr21OmhzLjPFKxcYmqGvtao1vbTe1vlOi/DHj98ffDYkAVwCUqAaVqAC5BHIOBvtsRflbfiGY5fXpVmo1lKuOYPKx5FTyII5Ec5N/h9gWGKw5Ubiop+V+99LzZprfQcREBERAREQEREBERAREQEREBERAREQEREBERAREQKTQZ/nApjQp7x5nyHp6z1ZzmQorYHvH6esgmNxZctve/M36zzebzYxfpr7ehw+JOT9VvTxZnmSIrdSeZPMmQLG4xna1gVuRp6gGSbM8MdJdj7D3mqGXC+sem45WnHgvE+bTuZenkxda+Hvo4L9qwppsoNSghq06hbvCmrIr0LW8NmLDfbTblJH8OmSm5Om7Wsp6Dz/2mvwCdlTfzam9MepcaPoCT/DJXwhlgQA2nt4d9fLwuREd50nSNcS+WINpfM2kiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgWmeHM8wWgtzzPITLjcWKSlj8h5mc+zvMmdiWPy6ATi5fKjDXUe5dnE4s5rbn0w5tmRctc7nrI1UxL31W2+hl+KxlyFHKX0UNx90/wB2M8Tz+6/uX0VaxSNQxNiGqDTbb9Z7KGHso/SX4bChWPv9Ok22GwZuNp2cXFFrb/Dk5eaK11HtjyzLWqOGbkOQ6AToWW4UIoE12UYKwBm/prae3X14fPX9+WQSsRKxIiICIiAiIgIiICIiAiIgIiICIiAiIgWzHWrKgJJsBL3YAXPSRDP81JuByHIf1nLyuRXDTc+/w38fBbNfUennzrNe0JtcDp6SJY6sSbfWXV8aTMYt4m3/AFv/AFnztrWvbvb2+nxYa4q9atdWXblv7fWbDBNqABBJFo7PUT1J5zeZJlOrvMO4OfqfIToxU+WdJmyRjruWTAYK/wC8I58h/WbzBYS5vL0pXPKbbCUbT28WOKRqHz+bLN57S9GGp2E9aiWKJkE6XHM7ViIhCIiAiIgIiICIiAiIgIiICIiAiIgUlCZWR7P800g01O/U/wBJpz5q4a9rNmLFbJaK1eXP85+wm46n1kNxmKLddz0nvr+bE3+k1eIQC55mfM5eROe/af8Aj6XjYa4q6h5Up2F2O/6TLTF7X/LynheoWIHMfr7zdZZg2qEKBcnYCZ/Ha0xEe5dF7xWu5ezJ8tNVrDlzJ6Aecl5oqihFFlH93MzYHBLQQKOfU+Z/2lwS5nucfBGKuvy+f5HInLbf4hTDUZsqSWmKlTtPSonXWHFa21yy6UErMmsiIgIiICIiAiIgIiIGo4hzyjgaJrVT10qo8TuQSFX8ib9ADOef9qNYtcUk0k7L3mPoL33PyHtIx8Ws4/asa1G57PDjQovtrIBqN73sv8ExfDLJhVxBqm5CEKguxs7c6igdUXfewBZDcG0sEu0YPN6iUe3xi08Otr6S51gfiB5N+EXPz2nhw3H2Cc21so+8ybH123+k5r8TsdrrLhKVVV7C2t6l2q1KjLez1LG4VGA52uW8hIZTXFDwqrjzRlb6A3+kI+l8JnWGq+Csh9NQB/I7zYA3nyyc1qU/Gjp7qR+s2mA4xqU7aK7r/EVhX0pE4lgfiViktd1qD8Sg/UbyU5L8RDXYU2oi9izMGIRFXmzXvsNvckAbkSaEl4izI0wKaGztz8wvn6X/AN5E6yC29r9T9r85DOKeJWZ2ZajgX5hipP5fpNHlvGeJQ/vD2lO/hbxAeat/vf5TxuZwuRnt23Go9Q9PjcjDiiI8/wAzpP67lOe49efyMw41AVBVvF/dveWYTHU8QmtDqUjrswb7p8j/AHvMWH3cKepJ09AbX2HsJ5dcdonUxqYezTJExuJ8LMPhPDbznSeHsp7BdbDvsOX3R5e/nNdwvkw2ruNh4Aep+8fTykpdp73Fwdaxa3t4/M5M3tNK+vywvvK06cAT0Is7YhwTKqrMoEtAl4mTXKsREIREQEREBERAREQERED5S4ldji8UTzOJrX9+1edK+FlqVGnUIUqWqVDd2RtV3p3T7L2Ske6d97i299X8ReFXo4qrVVCaVVi6sBsGfd1PkdWo+xEkXwyy9a2GamW0tTL0nW3eKuzVUcG/IM7i1t9JPQSwkuOY3MGrVHrOe/UdqjeWp2LG3pczGtW3IytfANTZqbbMpKsPJlNiPzBmA0mECRZKmPrhv2ZKtRV8WldaDrYltr26c5ZiMZpYpiMKmvqGpmjVHqQRf6Ts3wvqU1y6h2Q1ePWQLsKpYlg4G46W/Dpm8zjLcLjk7LEUdY6HQQ6nzVrXU+oMpt88LSwTkACrTJ2Gk67k8gOZO/pJHXRcvothkYs7HVVc89vDTH4V6+bEnla3sr8PYLLMQ1QYpazJ/h02CqyP0ZyDZmXpsN7HpIhn+NL338R5+8DV4rEms34R9Za729+ghwFH93M9eDwbEhgpd2HdRRc/3y39fnIrccJYrsKmhm/xAe7z7ygkMPLkR8/SZc8zlUdbqGIYFkvZSoIJVrbgG1vYzRU6rYarUap/joSqrcMFbkSxG2wuLeflaaqo5Ylibkm5J5kzltx6zl7z9f27Kcq1MXSPf+OvYH4ziwFbC2A2/dv09AbWkiwPxSy+pYM70yfvobD3YbT57E3lLJaigMFR7gHSWswPl5To05os+jcv4kwVaxp4mm38YU/zWm8pkEXBBHmDcfnPmLKsnrYmtTw6UFVnYKCSpA6ltjvZQx+U3Oc58cM/YYXXSw6WUVE1IazjZqpqKAWBPLe1gD1sGkmdvogS6cK4f+IuPX7QrUx1rKC3srJpJ9zf5zr3DecpjaC1lGk3Kut7lHFrrfrsQQfIiVi3EREBERAREQEREBERAREQMVSmrAqwBB5ggEH3BkLznBthKorYRFRiLOoB7Nxe9mXl7EWt8zJxMFbDK/MSwOK8QZUcXVeutE03feotw1Mv1dTzF+ZFudz1kWxmUlDZtjPoaplaHpNFmHDCVL90So4fhu3oEvRq1KZPM06joTblfSRf5z0VeIcdpbVi65FtO9Z9IBBuSNVjsLb8r36To2N4KTcgW+k9eR8J0cGy1qq9pXN+ypt4UHIu1+oB5nlewBYgSDiYoVUAqgVlRuVWzBG9jbvTz4qtrG4Um+7KLX9WA6+s+lqtJXDBwrhl0srAFNJ+yFOwX062HMzh3HPDK4Kt2lEMcMzaO8d1qaQ7IpO7KARZuhBBNxclaRMGU1F9ylwRcGxVtJGxse9YbcyRJRwLwdVx5bENUenTW6iogPjsbKtiCQp0kkG3S9zcRSirvTVR4QSCeuxNt/4mHoCZmweMr4ZtdGo9JvNGZL28wD3vYwJNn/AmOpEstFMSgHio/wCJYctSHv3t5aveQ2sqoxR6Low8SlirD3VluJOst+KWMp2XEJTxC+bDsq3+tRb+WSVeM8ozABMSmhuQGIpiog/y1VuVHqbSdYZd5Rjg3gTCZpSZ1xRp1FazU9AdlHQ+IXB33t0krf4YpQTU2NYotgB2IJJJsALNcn0mWhwJgmKYnBO1NlYMtTD1jXpmxvZ1ZiSu3K49ZXizHVe0oBmVmpYXG120KUQ1KdIaG0kkrY32ubajvERpJttpKC0MDRxOKp4gVWITD0206AvbuxZ1YMbt2CBwbCwb1MjDYoaSVfbYd1gdybDa9us1ecVGWjSS5ANSo9rmxsqU1JHUgIbH1M8OVEmqo6bsf4QbfW0sMU5yfB9p2vdW2jSt7hFd2GjvdDZW5nkCe9Ygzf4SVSRik6A0mHuwqA/RFkJyqsKdKu4QFrqgId1cAq9RgQO6Vshbexuu17XWb/CSn+7xFT7zon+hS3/PEq6NEoJWQIiICIiAiIgIiICIiAiIgUtLSsviBEuLeIVwYUBO0ru2mhQXxVH5am8lH9+ng4exeoVu1cPilYLXIuFDaQyKqnwoqtZbbHvHxFoTKFTF4jGVG11GZlQt4aNFdtK+V7Ek+vvfU59k37z/APoU67YaqigOQnaJUVeSvTuC7G9hY38IAuAZRIMwxTU9Copd6jBEFjp38TueiqLk8r2AG5EhPE3DGIxjUlpBVoU9QRncm+/eewBLsza2ubXGjfnJvkuWVioNc/vnW7gAKKSH/wANQCbHc9WsSd2tcyBsKtrAWA2A6AQS5XS4NSlTWmO9bmxG7MdyfT2moxvCx6CdfrYITW4jL/SVHFsTw446TV18ndehnaq+W+k11fKFP2Y0bchwxr4dtdJ3pt95HZG+ZUi8ktD4h41UenWWlX1I6a6lPTVCOLMNSFbj3HlvJTiMgRvszV4nhQHlIrT8SuMVl+CxehFda2IpVAi6VDO3aILXNu6CfmZGcqXTVHqrCTalk9WmlWhp10qmksnhIdPA6How5ctwSDNa/DVQWIUgg7So9NfEmlhkUILVRUOsOS5+wyhB4CNh+IHr07rlGHWnRpqqqvcS4VQve0C97dZyzgng1qlZa1YdxDq028RHK87AokVUS4GUErAulZZK3kF0Sl4vArEpeVgIiICIiAiIgJjrVAqljyAJ/KZJ48dhzUUKDbvAnnyHP+//ANgRwXqNsCd72AuSb3vt0B/vaZ8Jk1R6q1aoASnvSp3vep/6tS23d+yu9jdjvp0yHD0FpiwHuep9TM0Dz4ejpBvuSbk/0mQiXmUMDC6TA9KesiWlZUa18KD0mF8AD0m30Rol2NI2WDyhcpHlN4ElwSNjSplC+UyrlCHmJtwsqFk2rDh8OqCwFpkl9pZACck4u45xSY18vFqYDoishKFg4UqzPYkeIcgBOtzinx1yspWw2LW41qabEdGpnWhv5kO3+iEbTt85p+HtXHmuIpP9KgBmQZ5nC81r/wDAw7/VJIeHMYMRhqNXq6Kx9CVFx+d5swkw7z9NnSEMPGmYps1Gp7tgamn81NpQ/EbEpu60QPx0K6H6mTQi0tv6/WPkj6Pj/lD6XxSJ6YdvZ3X+hnqT4mn/ANvTPtigPoUkgrYRX8SK3+ZQ36ia2tw9hH3bDUSfM0ad/wA7S96/SfHP286fEodcN/pxKN/yiZl+I6dcLW/hKuPznmqcKYE/+WQf5QU/+pE1mM4Nwek6UZDY2K1alx6gFiPzBEd6/R0lMMh4zp4yscOtKrTcIz3dUC2VlUjZib3YdOhkk7Qzj3wfQtiA53/7rU+tdLfS87DaZ6hgzxETFSIiAlJWIFJSViBbFpdaUgUtFpW0rApaVtErAREQEx2mSWQEhfxZyz9oy2sQLtRK1l9Ahs/8jPJfisSlJGeo6oii7O7BUUeZY7CRCrxUMeWw2Dw7YigxNOtiHvTwgRrq6rexqtpuLCw3BvaUR/4cVXp4NKdVHQgtp1I26sxZTy5d7r5SYJik+8PYmx/IyL55nuNpYmpTCJ2IFPswRZnDDvuXBIGkgjTbqvufThs/VrK6hGN9mtY252YbGc18la21M+XVTFe1d1jcJGG9dvaG9bGaxAh30afVGKn8xLgh+zVcehs31Iv9ZdMfTYX9JYxnhY1hydG9CCp/O5/SY2xFUc6d/wDKwP62lR72E8eOFkb/ACn9JhOZgeJWX3QkfmLiefHZijI+lgTobrv4TA0/wYTdm8sOB/qqsf6TrFpzD4ML3ah8qNH+Zqh/pOoTfLnXxESKREQEREBKSsQKRKxApErEBERAREQEjvGWcVcHhzWpIjNqC3ckImq4DEDxd7SLXXxc5Ipq8/y5cVh6uHY2DoQDa+lhurW62YKflLA5ZllbC4xxWzbFVKrBrpSdGp5ep6aTTLK9txckXGzAzqGX1aNRF/Z3RqYFl7JlamoHQaNh7TjmYcGY/DEsqa1+9Ra7W9V2b5AGaJMU9N7kFKg5kaqNZfmtiD73lmu0idO+43LqdVdLoGHrzB8weYPrNHR4NUVNRc9jzKnxG32dXl68/wBZAcv45xlLbttY+7XUVRt/8iaX3HnfeSOjx8tdezr0nVTYM2HYVNSkcip0sgPXYmacmCtvcbbsee1P2zrbVcXcYPTqOuHKpRpFKNNQqotSpUDk1HYi4pqEYAC1ybk2npo8S18O4p46krIQLYnCjtaTEi99jfbqAtxblaxm3ank+Op9kj0wTyBPZVb+muxPyvIjj+EMblrNUwb66Z8VMqGVx5Oh7rj6jpMor48sZt58J7galHEprw9ZHXqUa9j5MOan0NjMrUHHr7bznC57g6iGr+yPh8bTHeag70WI1KgKkHvAuyKVYEi/2t7SrgDiWvjXNKqq2NNqiMNnCq6oA45d7USvWyMbm+yakWbliw5j6TVcVMlLB4isQLqh035am7ifzMsnCUPMTmXxBzpMQ7YSmB2FNg1dwB33U3Wip9CLn1H4WitdyTbUJH8KsqalhVrtt2yUtI/AiGzfMu3yA85OZr8lNqFBbAWpILDkLKosJ7rzY1s0RExUiIgIiICIiAiIgIiICIiAiIgJawl0QMLIDNdmOSUMQNNWkjj8Sg29j0+U2sWl2OcZp8MKDXNB3pH7p/eU/wAmOr+aQ3NOCMdh7kIKqj7VM3b3KGx/K87wRLGQGWLSx0+bHxDqSji5HNainWB5b2dRz5ET14HOalEWp1atIW8Ktrpf8N+6OnRuvtO65nkdDEDTVpJUH4lBI9jzEhObfDCi12oVHpn7rfvKf1OofnMtxJpBsZj/ANqBWtTp1Ta2umexreo0kd88iAE/6TDgrOctwg0F6lOqwUO2IXvMFB0jUl1VQCbX08z1Miea8F47D3Jp9on3qZ17eqGzfkDND+1OhKXItzRxcDlzRxYHYdJOsSvaXYeM+LkSktLCVUetVFlam6utNLXaoWBIG3K/vyBkN4TyMYuqqbnD0iC5N/3jnexvz1Hc/hAvubyO5VrrP2VNF11NK90EE7sTfeyjqbAeGdy4cydcLSSkvQXZurMebGNdYTe22oJYTPaUUS+0m1ZIiJipERAREQEREBERAREQEREBERAREQKGIiAlLREChEoViJRjeiDNTmnDWHxQtVpI/kSo1D2bmPkYiEa/IeB8LgqjVaessRYa21BF592++/qSZJ1W0RAvtKxEK//Z"
            alt=""
          />
          <img
            src="https://cdn11.bigcommerce.com/s-nyvkica9hs/images/stencil/1280x1280/products/13476/32300/Duragraph_Lifestyle_Gallery-18-Edit__80232.1698446236.jpg?c=2"
            alt=""
          />
          <img
            src="https://i.ebayimg.com/images/g/Jm0AAOSwdHZk3ITp/s-l1600.png"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/51cGsNktHKL._AC_UF894,1000_QL80_.jpg"
            alt=""
          />
        </div>
        <div className="itemInfo">
          <div className="itemInfoWrapper">
            <div className="itemLabel">Item#:</div>
            <div className="itemNumber"> CK2929</div>
            <div className="itemlabel">ASIN:</div>
            <div className="itemAsin">98439ASSDNA</div>
            <div className="itemlabel">UPC:</div>
            <div className="itemUpc">982498298398</div>
          </div>

          <div className="itemDesc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              quidem, atque nobis maxime fugit ab dignissimos officiis alias
              ipsam rem repellendus iusto animi cumque quos cupiditate sit
              eligendi consequatur fugiat.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              atque praesentium. Adipisci odio aliquam doloremque placeat.
              Officia laborum inventore ad perspiciatis fugiat. Laboriosam fuga
              asperiores perferendis molestiae unde, totam modi!
            </p>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
