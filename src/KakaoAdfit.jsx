import React, { Component } from 'react';

class KakaoAdFit extends Component {
    componentDidMount() {
        const { unit, width, height } = this.props;

        // 광고 요소와 스크립트 태그를 생성하여 DOM에 추가
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = 'display:none;';
        scr.async = 'true';
        scr.type = 'text/javascript';
        scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';

        // 광고 속성 설정
        ins.setAttribute('data-ad-width', width);
        ins.setAttribute('data-ad-height', height);
        ins.setAttribute('data-ad-unit', unit);

        // adfit라는 클래스명을 가진 div에 광고 요소 추가
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }

    render() {
        return (
            <div className="adfit"></div>
        );
    }
}

export default KakaoAdFit;