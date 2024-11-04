import { app, InvocationContext } from "@azure/functions";

// Define the subscription name and topic name variables with environment variable fallback
const subscriptionName = process.env.SUBSCRIPTION_NAME || 'mysubscription';
const topicName = process.env.TOPIC_NAME || 'exampletopic';

export async function servicebus_topicprocessing(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus topic function processed message:', message);
}

app.serviceBusTopic('servicebus_topicprocessing', {
    connection: 'FUNCTIONS_WORKER_RUNTIME',
    topicName: topicName, // Use the variable here
    subscriptionName: subscriptionName, // Use the variable here
    handler: servicebus_topicprocessing
});
