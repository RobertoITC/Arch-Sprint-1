
# Sistema de Gestión de Tareas Estilo Jira

Este proyecto implementa un sistema de gestión de tareas inspirado en Jira, utilizando TypeScript y aplicando varios patrones de diseño para lograr un sistema modular y escalable.

## Descripción

### El objetivo es ofrecer un sistema que permita crear, gestionar y notificar tareas de manera flexible, aprovechando los siguientes patrones de diseño:
	•	Bridge: Separar la lógica de las tareas de sus métodos de notificación (Telegram, Slack, WhatsApp, etc.).
	•	Factory: Centralizar la creación de tareas. Por ejemplo, al crear tareas de más de 4 horas, se dividen en subtareas según sea necesario.
	•	Singleton: Manejar una base de datos en memoria a través de una sola instancia para la aplicación.
	•	Composite: Permitir que las tareas puedan componerse de subtareas y tratarlas de forma unificada.

### Estructura del Proyecto
	•	/database: Contiene la implementación de la base de datos en memoria (usando Singleton).
	•	/factories: Incluye la lógica de creación de tareas (Factory).
	•	/senders: Implementa los diferentes métodos de envío de notificaciones (TelegramSender, SlackSender, etc.), siguiendo el patrón Bridge.
	•	/tasks: (Opcional) Si decides organizar la lógica de tareas aquí, podría incluir la clase base Task y cualquier clase compuesta (Composite).
	•	index.ts: Punto de entrada principal donde se orquestan las tareas, notificaciones y base de datos.

### Requisitos
	•	Node.js 14 o superior
	•	TypeScript 4.x

# Instalación
	1.	Clona el repositorio:

```git clone https://github.com/tu-usuario/tareas-jira.git```


	2.	Ingresa al directorio del proyecto:

```cd tareas-jira```


	3.	Instala las dependencias:

```npm install```


	4.	Compila el proyecto:

```npm run build```



# Uso
	1.	Ejecuta el proyecto (después de compilar) con:

```npm start```


	2.	Revisa la consola para verificar la creación y finalización de tareas, así como los mensajes de notificación enviados.

## Ejemplo de Flujo
	1.	Se crea una nueva tarea de 8 horas. El Factory determina que supera las 4 horas y la divide en subtareas si corresponde.
	2.	La tarea se almacena en la instancia única de la base de datos (patrón Singleton).
	3.	Al completar la tarea, se envía una notificación mediante el método configurado (patrón Bridge).
	4.	Si la tarea está compuesta por otras subtareas, se gestiona a través del Composite para mantener la jerarquía y las dependencias entre ellas.

## Principios SOLID
	•	Responsabilidad Única: Cada clase (por ejemplo, cada Sender) tiene una única función.
	•	Abierto/Cerrado: El sistema de envío de notificaciones es extensible para nuevos métodos sin modificar el código existente.
	•	Sustitución de Liskov: Las subtareas heredan la interfaz de las tareas principales.
	•	Segregación de Interfaces: Se definen interfaces específicas para las tareas y los métodos de notificación.
	•	Inversión de Dependencias: El código que crea y gestiona las tareas no depende directamente de las implementaciones concretas de notificación.

## Contribución
	1.	Haz un fork del repositorio.
	2.	Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
	3.	Realiza los cambios y haz commits descriptivos.
	4.	Envía tu rama a tu repositorio (git push origin feature/nueva-funcionalidad).
	5.	Crea un Pull Request detallando los cambios.
## UML
![Editor _ Mermaid Chart-2025-04-03-054620](https://github.com/user-attachments/assets/bd2571a6-813d-4652-be73-41f7edd8fcfd)

### Licencia

Este proyecto se distribuye bajo la licencia que prefieras (MIT, GPL, etc.). Asegúrate de incluir un archivo LICENSE si así lo deseas.
