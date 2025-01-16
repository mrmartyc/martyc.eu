const infoData = {
    ip: "78.102.125.73",
    hostname: "ip-78-102-125-73.bb.vodafone.cz",
    city: "Prague",
    region: "Prague",
    country: "CZ",
    loc: "50.0880,14.4208",
    org: "AS16019 Vodafone Czech Republic a.s.",
    postal: "110 00",
    timezone: "Europe/Prague (GMT+1)",
    is_anycast: false,
    is_mobile: false,
    is_anonymous: false,
    is_satellite: false,
    is_hosting: false,
    asn: "AS16019",
    name: "Vodafone Czech Republic a.s.",
    domain: "vodafone.cz",
    route: "78.102.0.0/17",
    type: "isp",
    company: "Vodafone Czech Republic a.s.",
    privacy: {
        vpn: false,
        proxy: false,
        tor: false,
        relay: false,
        hosting: false,
        service: "none"
    }
};

function typeInfo() {
    const infoContainer = document.getElementById("info");
    let text = `IP: ${infoData.ip}
Hostname: ${infoData.hostname}
City: ${infoData.city}
Region: ${infoData.region}
Country: ${infoData.country}
Location: ${infoData.loc}
Organization: ${infoData.org}
Postal: ${infoData.postal}
Timezone: ${infoData.timezone}
Is Anycast: ${infoData.is_anycast}
Is Mobile: ${infoData.is_mobile}
Is Anonymous: ${infoData.is_anonymous}
Is Satellite: ${infoData.is_satellite}
Is Hosting: ${infoData.is_hosting}
ASN: ${infoData.asn}
Company: ${infoData.company}
Domain: ${infoData.domain}
Route: ${infoData.route}
Type: ${infoData.type}
Privacy:
  VPN: ${infoData.privacy.vpn}
  Proxy: ${infoData.privacy.proxy}
  TOR: ${infoData.privacy.tor}
  Relay: ${infoData.privacy.relay}
  Hosting: ${infoData.privacy.hosting}
  Service: ${infoData.privacy.service}`;

    let i = 0;
    function type() {
        if (i < text.length) {
            infoContainer.textContent += text.charAt(i);
            i++;
            setTimeout(type, 20);
        }
    }
    type();
}

window.onload = function () {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('background-video');
    overlay.addEventListener('click', function() {
    video.volume = 0.15;
        
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';

        setTimeout(function() {
            document.getElementById('content').style.visibility = 'visible';
            document.getElementById('background-video').play();
            typeInfo();
        });


        // pageenter anim
        const infoContainer = document.querySelector('.container');
        infoContainer.classList.add('page-enter-animation');
    });
            // trail
        
            new cursoreffects.trailingCursor({
                particles: 10,               
                rate: 0.4,                   
                baseImageSrc: '/assets/mac-os-x.cur'  
            });
    
            // zakazuje se vsechno
            document.addEventListener('dragstart', function (e) {
                e.preventDefault(); 
})}
