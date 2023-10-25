export default function Input() {
    return (
        <div className="w-[80%] sm:w-[500px]">
            <input
                type="url"
                placeholder="https://www.youtube.com/watch?v= YOUR VIDEO URL HERE"
                className="border border-1 border-gray-300 rounded-md p-2 text-sm w-full"
            />
        </div>
    )
}