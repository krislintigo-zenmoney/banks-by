export interface Bank {
  id: string
  name: string
  engName: string
  syncStatus: 'active' | 'warning' | 'down' | 'not-connected'

  syncType: 'open-api' | 'mobile' | 'web' | 'combo'
  category: string
  website: string
  lastCheck: string

  status: {
    title: string
    text: string
  }
  connection: {
    title: string
    text: string
  }

  updates: Array<{
    date: string
    text: string
  }>

  features: {
    title: string
    text: Array<string>
  }

  integration: Array<string>
  supported: Record<
    'accounts' | 'cards' | 'deposits' | 'credits',
    { status: string; text: string; description: string }
  >
}
