const infoBoxElements = {
    title: ['Visión de CiviConecta', 'Misión de CiviConecta'],
    message: ['Convertirnos en una institución líder en el ámbito educacional que impulse el desarrollo de aprendizajes y actitudes, con foco en las habilidades socioemocionales, de niños, niñas y jóvenes para que generen un impacto positivo en la sociedad; apuntando a una formación integral e inclusiva; y respondiendo a la necesidad de reducir el trabajo excesivo de docentes y equipo directivo, tal como es la planificación y construcción de actividades.', 'Crear recursos y materiales educativos cercanos a los intereses de los y las estudiantes, atingentes con las necesidades actuales, que consideran el currículum de Orientación vigente y la experiencia de docentes con trayectoria en aula, para desarrollar habilidades del siglo XXI tales como: creatividad, colaboración, resolución de problemas, pensamiento crítico, comunicación asertiva, entre otras; contribuyendo así a la formación de ciudadanos y ciudadanas que puedan mejorar su entorno inmediato, impactando positivamente en la sociedad actual.'],
};

const heartBrainIcon =  <svg className='heartBrainIcon' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                            <title>CiviConecta - heartBrainIcon</title>
                            <rect className="heartBrainIcon-bg" x="5" y="5" width="110" height="110" rx="14" />
                            <path className="heartBrainIcon-ft" d="M92.29,38.6a19.07,19.07,0,0,0-13.58-5.69h-.09a19.13,19.13,0,0,0-13.68,5.68l-4.93,5-4.94-5a19.24,19.24,0,0,0-27.36,0,19.66,19.66,0,0,0,0,27.58c1.9,1.91,8.41,8.54,8.41,8.54l3.44,3.48s17.12,17.41,19.6,19.91l0,0a1.24,1.24,0,0,0,.82.32,1.23,1.23,0,0,0,.87-.36L70,89c.08-.07.14-.14.21-.21l.24-.26.77-.79,5.42-5.56L87.52,71l4.77-4.77A19.66,19.66,0,0,0,92.29,38.6Zm-58.84,30c-1.49-1.53-2.89-3-4-4.07a17.14,17.14,0,0,1,0-24.16,16.67,16.67,0,0,1,23.47-.41h0a8.31,8.31,0,0,0-7.95,5.84l0,.06h-.06a6.09,6.09,0,0,0-1.48.31,10.22,10.22,0,0,0-5.55,5.32,9.83,9.83,0,0,0-.51,8.16l0,.07-.06,0a9.61,9.61,0,0,0-3.82,8.83Zm25.33,25.7-4.62-4.66-1.7-1.88a3.65,3.65,0,0,1-1-2.67,3.7,3.7,0,0,1,1.17-2.59A1.22,1.22,0,1,0,51,80.69,6.13,6.13,0,0,0,49.14,84l0,.52-1-1-.32-.33h0l-5-5.11h0c-1.32-1.32-3-3.06-4.82-4.9h0a9.71,9.71,0,0,1-1.91-3.89,7.13,7.13,0,0,1,.77-5.45,7.22,7.22,0,0,1,4.39-3.31,5.63,5.63,0,0,1,1.36-.17,5.42,5.42,0,0,1,3.07.94l.07,0,0,.07a5.36,5.36,0,0,0-.48,2.95,1.22,1.22,0,0,0,1.21,1.08h.15a1.2,1.2,0,0,0,.81-.46,1.19,1.19,0,0,0,.26-.9,3,3,0,0,1,2.63-3.36,1.23,1.23,0,0,0-.15-2.44H50a5.42,5.42,0,0,0-2.67,1.11l-.05,0-.06,0a8,8,0,0,0-4.62-1.48,8.26,8.26,0,0,0-2,.25,10.33,10.33,0,0,0-1,.34l-.09,0,0-.09A7.71,7.71,0,0,1,40,52.55a7.79,7.79,0,0,1,4.14-4.08,3.38,3.38,0,0,1,1.18-.22,3.25,3.25,0,0,1,1.29.27,3.76,3.76,0,0,1,1.82,3.2,1.23,1.23,0,0,0,1.22,1.1h.12a1.22,1.22,0,0,0,1.1-1.33,6.12,6.12,0,0,0-3.2-5.16l-.12,0-.11,0-.05,0v-.1a5.89,5.89,0,0,1,9.65-2,6,6,0,0,1,1.73,4.18V62.9a3.72,3.72,0,0,1-3.73,3.72,1.23,1.23,0,0,0,0,2.45,6.12,6.12,0,0,0,3.58-1.16l.15-.11Zm25.16-25a10.62,10.62,0,0,1-1.57,3.45l-.14.13h0l-.49.5h0l-1,1a4.39,4.39,0,0,0-.7.73l-6.57,6.73-.74.75a3.72,3.72,0,0,1-5.26-.18,1.22,1.22,0,1,0-1.79,1.67A6,6,0,0,0,69,85.9l.5,0-1.26,1.28h0l-.14.15c-.2.16-4.66,4.67-6.87,6.91V74.41A3.72,3.72,0,0,1,65,70.69a1.23,1.23,0,0,0,0-2.45,6.07,6.07,0,0,0-3.58,1.16l-.15.11V48.3A5.9,5.9,0,0,1,71.3,44.12a5.75,5.75,0,0,1,1.29,2l0,.09-.09,0-.1,0-.12.05a5.51,5.51,0,0,0-2.64,2.92l0,.1-.09,0a5.35,5.35,0,0,0-2.25-.6h0A1.23,1.23,0,0,0,66,49.85a1.25,1.25,0,0,0,1.17,1.28,3,3,0,0,1,2.89,3.13,1.23,1.23,0,0,0,1.17,1.27h.06a1.21,1.21,0,0,0,1.22-1.17,5.42,5.42,0,0,0-.87-3.16l0,0v0a3.47,3.47,0,0,1,1.72-2.62,3.53,3.53,0,0,1,1.32-.26,3.57,3.57,0,0,1,2,.6A8.29,8.29,0,0,1,80,52.55a7.71,7.71,0,0,1,.57,5.88l0,.1-.09,0c-.34-.13-.68-.24-1-.34a7.79,7.79,0,0,0-2-.25,7.93,7.93,0,0,0-5.58,2.28,1.22,1.22,0,0,0,1.72,1.74,5.47,5.47,0,0,1,3.85-1.57,5.38,5.38,0,0,1,1.38.17,7.2,7.2,0,0,1,5.16,8.77Zm6.62-4.82-4,4a9.61,9.61,0,0,0-3.84-8.77l0,0,0-.07a9.92,9.92,0,0,0-.5-8.15,10.85,10.85,0,0,0-4.31-4.76,7.14,7.14,0,0,0-2.73-.89h-.06l0,0A8.26,8.26,0,0,0,71.17,41a8.39,8.39,0,0,0-4-1.05H67A16.7,16.7,0,0,1,78.61,35.3h.3a16.74,16.74,0,0,1,11.65,5,17.14,17.14,0,0,1,0,24.16Z" />
                        </svg>;



const quoteIcon =   <svg className='quote-icon' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                        <title>CiviConecta - iconos</title>
                        <path d="M31.7,29.15a5,5,0,0,0-4.93,5V58h0a5,5,0,0,0,4.93,4.92h4.15A7.72,7.72,0,0,1,35,65.19h0c-1.66,2.62-4.58,4.28-6.95,5.26h0a5,5,0,0,0-2.68,6.34L29.56,87.7a5,5,0,0,0,6.52,2.76h0A34.45,34.45,0,0,0,54,73.68c2.79-5.79,4.24-12.08,4.24-23.19V34.17a5,5,0,0,0-4.89-5H31.7Zm36.74,0a5,5,0,0,0-4.92,5V58h0a5,5,0,0,0,4.92,4.92H72.6a7.72,7.72,0,0,1-.87,2.26h0c-1.66,2.62-4.59,4.28-7,5.26h0a5,5,0,0,0-2.68,6.34L66.3,87.7a5,5,0,0,0,6.53,2.76h0A34.45,34.45,0,0,0,90.76,73.68C93.55,67.89,95,61.6,95,50.49V34.17a5,5,0,0,0-4.9-5h0s0,0,0,0H68.44ZM31.7,33.53H53.32a.53.53,0,0,1,.56.57h0v16.4c0,10.75-1.29,16.06-3.82,21.29v0c-3.12,6.55-8.4,11.47-15.69,14.64a.53.53,0,0,1-.73-.32h0l-4.23-10.9h0a.52.52,0,0,1,.29-.71h0c2.74-1.14,6.53-3.13,8.95-7a17.15,17.15,0,0,0,2-6.35h0a2.19,2.19,0,0,0-.45-1.83,2.16,2.16,0,0,0-1.69-.8H31.7a.53.53,0,0,1-.55-.56V34.13h0v0a.53.53,0,0,1,.55-.57Zm36.75,0H90.07a.52.52,0,0,1,.55.57h0v16.4c0,10.75-1.28,16.06-3.81,21.29v0c-3.12,6.55-8.4,11.47-15.69,14.64a.52.52,0,0,1-.73-.32h0l-4.22-10.9h0a.52.52,0,0,1,.29-.71h0c2.74-1.14,6.54-3.13,9-7a17.11,17.11,0,0,0,2-6.35,2.19,2.19,0,0,0-2.14-2.63H68.45A.52.52,0,0,1,67.9,58V34.1a.53.53,0,0,1,.55-.57Z" />
                    </svg>;

const message = 'Desarrollar habilidades socioemocionales en tus estudiantes los ayudará a entender y manejar sus emociones; establecer y alcanzar metas positivas; sentir y mostrar empatía por los demás; construir y mantener relaciones saludables; y tomar decisiones responsables, es decir, los prepara para la vida';

const videoCivi = 'https://www.youtube.com/embed/zDZRmXnZMjc';


export { infoBoxElements, heartBrainIcon, message, videoCivi, quoteIcon };