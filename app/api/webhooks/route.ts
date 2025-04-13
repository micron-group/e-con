export async function POST(req) {
      const payload = await req.json();

      if (payload.event === 'order.completed') {
        // Save order and generate download link
      }

      return new Response('Webhook received');
    }