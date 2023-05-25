<script setup>
import Language from '../Language.vue';
import Skill from '../Skill.vue'

</script>

<template>
    <div class="flex flex-col my-2 h-auto py-6 poppins-regular">
        <span class="font-bold text-3xl text-gray-200 text-center mb-5 lg:mb-0 tracking-wide">CONTACTO</span>
        <div class="flex flex-col justify-center items-start lg:items-start gap-2">
            <div class="flex items-center my-2  lg:my-0 lg:mt-0 poppins-regular text-gray-200 md:transform-none lg:transform lg:translate-y-6 tracking-wide">
                <img
                    class="w-6 h-6 mr-4 cursor-pointer"
                    src="../../assets/icons/linkedin.png"
                    alt="Linkedin"
                >
                <a
                    href="https://www.linkedin.com/in/kristian-mart%C3%ADnez-aa057519a/"
                    target="_blank"
                >Linkedin</a>
            </div>
            <div class="flex items-center my-2 lg:my-0 poppins-regular text-gray-200 md:transform-none lg:transform lg:translate-y-6 tracking-wide">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                <a
                    href="mailto:kristianmartinezgarcia@gmail.com"
                    target="_blank"
                >Correo electrónico</a>
            </div>
            <div class="flex items-center my-2 lg:my-0 poppins-regular text-gray-200 md:transform-none lg:transform lg:translate-y-6 tracking-wide">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <a
                    href="https://acortar.link/rQ8cDl"
                    target="_blank"
                >Islas Canarias</a>
            </div>
        </div>
        <span class="font-bold text-3xl text-gray-200 mt-12 my-6 lg:mt-16 text-center tracking-wide">IDIOMAS</span>
        <div class="flex flex-col justify-center items-center lg:items-start gap-6">
            <Language
                :rate="5"
                name="Español"
            />
            <Language
                :rate="3"
                name="Inglés"
            />
        </div>
        <span class="font-bold text-3xl text-gray-200 uppercase mt-12 lg:mt-12 mb-4 text-center tracking-wide">Skills</span>
        <Skill
            name="HTML"
            :number="7.5"
        />
        <Skill
            name="CSS"
            :number="6.5"
        />
        <Skill
            name="Vuejs"
            :number="6.5"
        />
        <Skill
            name="JS"
            :number="6.5"
        />
        <Skill
            name="Typescript"
            :number="5"
        />
        <Skill
            name="Python"
            :number="4"
        />
        <span class="font-bold text-3xl text-gray-200 mt-12 my-6 lg:mt-10 text-center uppercase tracking-wide">Hobbies</span>
        <div class="flex justify-center items-center lg:items-start gap-6">
            <div class="rounded-full bg-darkgray w-16 h-16 border-solid border-2 border-purple">
                <svg
                    id="svg2"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    width="512"
                    height="512"
                    class="w-14 h-14 mx-0.5"
                    version="1.1"
                    inkscape:version="0.91+devel r"
                    sodipodi:docname="input-gaming.svg"
                    viewBox="0 0 512.00001 512.00001"
                    alt="Videojuegos"
                >
                    <metadata
                        id="metadata23"
                    >
                        <rdf:RDF>
                            <cc:Work
                                rdf:about=""
                            >
                                <dc:format>image/svg+xml</dc:format>
                                <dc:type
                                    rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                                />
                                <dc:title />
                            </cc:Work>
                        </rdf:RDF>
                    </metadata>
                    <sodipodi:namedview
                        id="namedview21"
                        pagecolor="#ffffff"
                        bordercolor="#666666"
                        borderopacity="1"
                        objecttolerance="10"
                        gridtolerance="10"
                        guidetolerance="10"
                        inkscape:pageopacity="0"
                        inkscape:pageshadow="2"
                        inkscape:window-width="1920"
                        inkscape:window-height="1027"
                        inkscape:document-units="px"
                        showgrid="false"
                        units="px"
                        inkscape:zoom="16.511435"
                        inkscape:cx="19.89012"
                        inkscape:cy="30.761374"
                        inkscape:window-x="0"
                        inkscape:window-y="27"
                        inkscape:window-maximized="1"
                        inkscape:current-layer="svg2"
                    />
                    <defs
                        id="defs4"
                    />
                    <path
                        id="shape0"
                        style="fill:#ccdade;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2.01260185"
                        d="m 121.38857,147.33558 c -3.31621,0.005 -6.67095,0.1953 -10.0381,0.56226 -53.874482,5.8696 -93.74354,56.88717 -90.122076,115.31776 3.62147,58.43099 49.436606,103.22351 103.553056,101.2643 23.68594,-0.85728 45.21599,-10.53335 61.95515,-26.05897 l 133.96851,0 c 16.66666,15.08588 37.96092,24.71795 61.49342,26.07902 54.66638,3.16186 102.16044,-39.20385 108.17059,-96.5063 6.01013,-57.30368 -31.56089,-109.57551 -85.56478,-119.05185 -0.19531,-0.0308 -0.38691,-0.0514 -0.58221,-0.0822 l 0,-1.36517 -19.47391,0 -260.32814,0 c -1.01599,-0.0308 -2.00957,-0.16241 -3.0315,-0.16036 z"
                        inkscape:connector-curvature="0"
                    />
                    <path
                        id="shape3"
                        style="fill:#7f8c8d;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        inkscape:connector-curvature="0"
                        d="m 316.20384,257.10269 c 0.01,40.83875 30.32309,74.55188 69.04765,76.79171 38.72475,2.23983 72.36181,-27.77395 76.61937,-68.36641 4.25757,-40.59215 -22.34967,-77.6127 -60.60456,-84.3255 -38.25542,-6.7128 -74.82482,19.22201 -83.29773,59.07457"
                        stroke-miterlimit="2.00000000000"
                    />
                    <path
                        id="shape4"
                        style="fill:#223656;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2.01260185"
                        d="m 99.886959,202.84626 0,33.9288 -38.486083,0 0,39.77095 38.486083,0 0,40.61414 40.493701,0 0,-40.61414 38.727,0 0,-39.77095 -38.727,0 0,-33.9288 -40.493701,0 z m 136.076501,36.59891 c -2.1437,0 -4.27986,0.82644 -5.92248,2.46936 l -17.78751,17.78755 c -3.28524,3.28522 -3.28524,8.55965 0,11.84497 3.28522,3.28522 8.55972,3.28522 11.84496,0 l 17.78752,-17.78755 c 3.28524,-3.28522 3.28524,-8.55976 0,-11.84497 -1.64262,-1.64261 -3.77879,-2.46936 -5.92249,-2.46936 z m 48.10258,0.68253 c -2.14369,0 -4.29994,0.82645 -5.94256,2.46936 l -17.78751,17.78756 c -3.28524,3.28521 -3.28524,8.5798 0,11.86501 3.28525,3.28522 8.5798,3.28522 11.86504,0 l 17.78752,-17.78745 c 3.28523,-3.28532 3.28523,-8.5799 0,-11.86512 -1.64262,-1.6426 -3.77878,-2.46936 -5.92249,-2.46936 z"
                        inkscape:connector-curvature="0"
                    />
                    <rect
                        id="shape8"
                        style="fill:#ecf0f1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2.01260185"
                        y="401.59198"
                        x="39.009731"
                        ry="19.982462pt"
                        rx="19.982462pt"
                        height="39.964924pt"
                        width="92.372711pt"
                        stroke-miterlimit="2.01260185242"
                        transform="rotate(-45)"
                    />
                    <path
                        id="shape9"
                        style="fill:#1ba389;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        inkscape:connector-curvature="0"
                        d="m 361.73883,241.83466 c -7.96398,-7.96398 -20.87612,-7.96398 -28.84013,0 -7.96398,7.96398 -7.96398,20.87623 0,28.84021 7.96401,7.96397 20.87615,7.96397 28.84013,0 7.96402,-7.96398 7.96402,-20.87623 0,-28.84021"
                        stroke-miterlimit="2.00000000000"
                    />
                    <path
                        id="shape10"
                        style="fill:#2980b9;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        inkscape:connector-curvature="0"
                        d="m 407.68704,195.62845 c -7.96397,-7.96397 -20.87611,-7.96397 -28.84013,0 -7.96398,7.96398 -7.96398,20.87613 0,28.8401 7.96402,7.96398 20.87616,7.96398 28.84013,0 7.96402,-7.96397 7.96402,-20.87612 0,-28.8401"
                        stroke-miterlimit="2.00000000000"
                    />
                    <rect
                        id="shape11"
                        style="fill:#ecf0f1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        y="462.95224"
                        x="34.937664"
                        ry="19.982462pt"
                        rx="19.982462pt"
                        height="39.964924pt"
                        width="92.372711pt"
                        stroke-miterlimit="2.00000000000"
                        transform="rotate(-45)"
                    />
                    <path
                        id="shape12"
                        style="fill:#f9de69;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        inkscape:connector-curvature="0"
                        d="m 402.24742,287.79119 c -7.96398,-7.96398 -20.87612,-7.96408 -28.84013,0 -7.96398,7.96397 -7.96398,20.87613 0,28.8401 7.96401,7.96398 20.87615,7.96398 28.84013,0 7.96402,-7.96408 7.96402,-20.87613 0,-28.8401"
                        stroke-miterlimit="2.00000000000"
                    />
                    <path
                        id="shape13"
                        style="fill:#ba174e;fill-opacity:1;fill-rule:evenodd;stroke:#003bc3;stroke-width:0;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:2"
                        inkscape:connector-curvature="0"
                        d="m 448.19562,241.89634 c -7.96397,-7.96398 -20.87611,-7.96408 -28.84013,0 -7.96398,7.96397 -7.96398,20.87622 0,28.8402 7.96402,7.96398 20.87616,7.96398 28.84013,0 7.96403,-7.96408 7.96403,-20.87623 0,-28.8402"
                        stroke-miterlimit="2.00000000000"
                    />
                </svg>
            </div>

            <div class="rounded-full border-solid border-2 border-purple bg-darkgray">
                <svg
                    style="enable-background:new 0 0 512 512;"
                    version="1.1"
                    viewBox="0 0 512 512"
                    alt="Football"
                    class="h-16 w-16"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                ><g id="footbal"><g><g><defs><circle
                    id="SVGID_1_"
                    cx="255.997"
                    cy="255.108"
                    r="197.391"
                /></defs><use
                    style="overflow:visible;fill:#EEEEEE;"
                    xlink:href="#SVGID_1_"
                /><clipPath id="SVGID_2_"><use
                    style="overflow:visible;"
                    xlink:href="#SVGID_1_"
                /></clipPath><polygon
                    points="294.403,26 318.137,100.068 256,145.724 193.862,99.813      217.597,26    "
                    style="clip-path:url(#SVGID_2_);fill:#424242;"
                /><polygon
                    points="49.955,149.063 127.455,148.874 151.927,221.904 89.51,267.215      26.611,222.235    "
                    style="clip-path:url(#SVGID_2_);fill:#424242;"
                /><polygon
                    points="485.56,223.493 422.243,268.183 360.248,222.478      385.293,149.528 462.616,150.194    "
                    style="clip-path:url(#SVGID_2_);fill:#424242;"
                /><polygon
                    points="359.993,462.855 297.557,416.942 321.284,343.667      398.411,344.329 422.258,417.886    "
                    style="clip-path:url(#SVGID_2_);fill:#424242;"
                /><polygon
                    points="89.736,415.144 114.901,341.843 191.918,342.599      214.327,416.401 151.252,461.133    "
                    style="clip-path:url(#SVGID_2_);fill:#424242;"
                /></g><polygon
                    points="217.089,316 193.041,241.485 256,195.491 318.958,241.61 294.91,316   "
                    style="fill:#424242;"
                /><g><path
                    d="M256,70c49.683,0,96.391,19.347,131.522,54.478S442,206.317,442,256     s-19.347,96.391-54.478,131.522S305.683,442,256,442s-96.391-19.347-131.522-54.478S70,305.683,70,256     s19.347-96.391,54.478-131.522S206.317,70,256,70 M256,56C145.543,56,56,145.543,56,256s89.543,200,200,200s200-89.543,200-200     S366.457,56,256,56L256,56z"
                    style="fill:#424242;"
                /></g><line
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                    x1="291.91"
                    x2="323.284"
                    y1="312.407"
                    y2="347.667"
                /><line
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                    x1="187.91"
                    x2="219.284"
                    y1="347.667"
                    y2="312.407"
                /><line
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                    x1="312.208"
                    x2="368.786"
                    y1="244.721"
                    y2="218.286"
                /><line
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                    x1="199.786"
                    x2="143.208"
                    y1="244.721"
                    y2="218.286"
                /><line
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                    x1="256.5"
                    x2="256.5"
                    y1="204"
                    y2="135"
                /><polygon
                    points="203.236,417.5 117.862,354.512     85.252,253.669 117.862,154.917 203.236,94.5 308.764,94.5 394.138,154.677 426.748,254.114 394.138,354.975 308.764,417.5   "
                    style="fill:none;stroke:#424242;stroke-width:5;stroke-miterlimit:10;"
                /></g></g><g id="Layer_1" /></svg>
            </div>
            <div class="rounded-full bg-darkgray">
                <img
                    src="../../assets/icons/music-note-circle-shape-brand_icon-icons.com_59304.png"
                    alt=""
                    width="64"
                    height="64"
                    class=" h-16 w-16"
                >
            </div>
        </div>
        <span class="font-bold text-3xl text-gray-200 mt-12 my-6 lg:mt-12 text-center uppercase tracking-wide">Aptitudes</span>
        <div class="flex flex-col h-full w-full gap-y-2 text-left">
            <span class="font-semibold text-lg text-gray-200 ">- Capacidad de trabajar en equipo</span>
            <span class="font-semibold text-lg text-gray-200 ">- Buena actitud ante los problemas</span>
            <span class="font-semibold text-lg text-gray-200 ">- Empatía</span>
            <span class="font-semibold text-lg text-gray-200 ">- Ganas de aprender</span>
        </div>
    </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
