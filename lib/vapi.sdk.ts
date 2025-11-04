import Vapi from '@vapi-ai/web';

// ✅ Use a global singleton to prevent multiple KrispSDK initializations (important for Next.js)
declare global {
  var vapiInstance: Vapi | undefined;
}

if (!global.vapiInstance) {
  global.vapiInstance = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
  console.log('✅ Vapi SDK initialized once');
}

export const vapi = global.vapiInstance!;
