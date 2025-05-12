import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div className='font-root my-2'>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}
        className="px-4 py-2 rounded bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 shadow"
        >
        Disconnect
      </button>
    </div>
  )
}