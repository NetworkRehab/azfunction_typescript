import { app, InvocationContext } from "@azure/functions";

export async function servicebus_serialprocessing(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
}

app.serviceBusQueue('servicebus_serialprocessing', {
    connection: 'FUNCTIONS_WORKER_RUNTIME',
    queueName: 'examplequeue',
    handler: servicebus_serialprocessing
});
