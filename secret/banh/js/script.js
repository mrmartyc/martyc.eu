async function fetchUserInfo() {
    try {
        const response = await fetch('https://ipapi.co/json/'); // Použití API pro získání údajů
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Chyba při načítání údajů o uživateli:', error);
        return null;
    }
}

function getUserSystemInfo() {
    return {
        browser: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        screenWidth: screen.width,
        screenHeight: screen.height,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cpuCores: navigator.hardwareConcurrency || 'N/A',
        memory: navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A',
        online: navigator.onLine ? 'Yes' : 'No',
        gpu: getGPUInfo()
    };
}

function getGPUInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return 'N/A';
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';
}

function typeInfo(userData, systemData) {
    const infoContainer = document.getElementById("info");
    let text = `IP: ${userData.ip}
Hostname: ${userData.hostname || 'N/A'}
City: ${userData.city}
Region: ${userData.region}
Country: ${userData.country_name}
Latitude: ${userData.latitude}
Longitude: ${userData.longitude}
ISP: ${userData.org || userData.isp || 'N/A'}
ASN: ${userData.asn || 'N/A'}
Timezone: ${userData.timezone}
Postal Code: ${userData.postal || 'N/A'}
Currency: ${userData.currency || 'N/A'}
Calling Code: ${userData.country_calling_code || 'N/A'}
Languages: ${userData.languages || 'N/A'}
EU Member: ${userData.in_eu ? 'Yes' : 'No'}
VPN/Proxy: ${userData.security ? userData.security.vpn || userData.security.proxy ? 'Yes' : 'No' : 'Unknown'}

Browser: ${systemData.browser}
Platform: ${systemData.platform}
Language: ${systemData.language}
Cookies Enabled: ${systemData.cookiesEnabled}
Screen Resolution: ${systemData.screenWidth}x${systemData.screenHeight}
Timezone: ${systemData.timezone}
CPU Cores: ${systemData.cpuCores}
Memory: ${systemData.memory}
Online: ${systemData.online}
GPU: ${systemData.gpu}`;

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
    overlay.addEventListener('click', async function() {
        video.volume = 0.15;
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';

        setTimeout(async function() {
            document.getElementById('content').style.visibility = 'visible';
            document.getElementById('background-video').play();
            const userInfo = await fetchUserInfo();
            const systemInfo = getUserSystemInfo();
            if (userInfo) {
                typeInfo(userInfo, systemInfo);
            }
        }, 500);

        const infoContainer = document.querySelector('.container');
        infoContainer.classList.add('page-enter-animation');
    });

    document.addEventListener('dragstart', function (e) {
        e.preventDefault(); 
    });
};
