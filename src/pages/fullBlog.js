import React from 'react'
import FullBlogPage from '../components/Blog/FullBlogPage'

const fullBlog = () => {

  const blogData = {
    id: 1,
    imageSrc: "assets/avatar4.png",
    category: "Tech",
    author: "Atul Tripathi",
    date: "14th Oct, 2022",
    title: "What is Computer",
    description: "A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a  computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster.A broad range of industrial and consumer products use computers as control systems. Simple special-purpose devices like microwave ovens and remote controls are included, as are factory devices like industrial robots and computer-aided design, as well as general-purpose devices like personal computers and mobile devices like smartphones. Computers power the Internet, which links billions of other computers and users.Early computers were meant to be used only for calculations. Simple manual instruments like the abacus have aided people in doing calculations since ancient times. Early in the Industrial Revolution, some mechanical devices were built to automate long tedious tasks, such as guiding patterns for looms. More sophisticated electrical machines did specialized analog calculations in the early 20th century. The first digital electronic calculating machines were developed during World War II. The first semiconductor transistors in the late 1940s were followed by the silicon-based MOSFET (MOS transistor) and monolithic integrated circuit (IC) chip technologies in the late 1950s, leading to the microprocessor and the microcomputer revolution in the 1970s. The speed, power and versatility of computers have been increasing dramatically ever since then, with transistor counts increasing at a rapid pace (as predicted by Moore's law), leading to the Digital Revolution during the late 20th to early 21st centuries.",
    clickAction: "/fullBlog"
  }

  return (
    <div>
      <FullBlogPage blogData={blogData} />
    </div>
  )
}

export default fullBlog