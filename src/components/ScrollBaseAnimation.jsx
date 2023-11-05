import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollBaseAnimation() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress);

	return (
		<div style={{ padding: '1.5rem', color: 'white' }}>
			<motion.div
				style={{
					height: '15px',
					background: 'blue',
					position: 'sticky',
					top: 0,
					transformOrigin: 'left',
					scaleX,
				}}
			/>
			<h1
				style={{
					fontSize: '3rem',
					marginBottom: '1rem',
				}}>
				Scroll Base Animation
			</h1>
			<p style={{ textJustify: 'inter-word' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
				iusto placeat ratione quia dolorem, unde, non assumenda
				accusamus incidunt quam enim ipsa provident dignissimos ex eos
				dolor! Nisi quos qui dicta incidunt laboriosam sapiente,
				laudantium similique tenetur, placeat explicabo, suscipit
				perferendis necessitatibus. Vero quisquam iure voluptatem
				aperiam fugiat molestiae, facilis repellat? Explicabo, vero
				consectetur? Voluptas omnis reprehenderit deleniti distinctio
				quam modi accusamus officia sequi commodi debitis maiores culpa
				minus adipisci atque non quaerat sapiente, velit labore neque
				soluta. Harum quae totam labore cupiditate dolore officiis,
				autem sunt maiores, voluptate impedit optio corrupti itaque
				vitae culpa cumque ipsum! Ipsum iste accusamus harum dolores
				repellendus, iure eius voluptas suscipit magni aliquid delectus
				ut, quidem a ipsa cum quo possimus quam aperiam voluptates.
				Ducimus exercitationem et nesciunt modi ipsum porro natus
				sapiente, culpa dolores nemo sit magni tenetur reprehenderit
				sequi ratione consequuntur repellendus delectus itaque quibusdam
				aliquid! Doloribus nisi, deserunt a aliquid rem exercitationem
				est recusandae tenetur veritatis similique corporis ut ex? Quam
				quos aut tenetur dolores similique itaque dicta earum, minus
				minima voluptas, nemo ducimus vitae. Facere unde architecto
				repudiandae non quaerat commodi, dicta sapiente itaque autem
				exercitationem ipsum corrupti assumenda laudantium mollitia
				quidem ducimus corporis sunt, ipsa, voluptates possimus. Odio
				temporibus, quae asperiores saepe expedita exercitationem! Rem
				soluta at, ipsa ullam est voluptas eaque cum eos. Culpa,
				blanditiis at facere harum labore voluptas fugiat. Quod
				laboriosam assumenda commodi temporibus possimus eius totam iure
				minus tempore impedit amet voluptas repellendus, eaque sint,
				laborum non ullam veniam eveniet deserunt culpa numquam
				excepturi veritatis quasi! Autem molestias, nostrum veritatis
				blanditiis esse rem odit exercitationem. Quidem maiores mollitia
				consequatur saepe hic esse a amet molestiae, architecto
				eligendi? Consectetur architecto explicabo numquam rem? Labore
				illum voluptatem ullam adipisci eius ducimus, neque esse error
				cupiditate. Minima vel dolorem ullam atque voluptatibus
				consequuntur, amet neque! Temporibus, voluptate quasi esse
				incidunt nam assumenda error eum debitis maxime amet laborum
				quia placeat nesciunt dignissimos ipsam rem provident explicabo
				totam inventore id doloribus magni? Hic impedit voluptatem illum
				commodi est deserunt ab cumque porro. Incidunt deleniti labore
				ipsa enim dolor illum debitis, quibusdam aliquam, aut totam
				architecto voluptatem. Delectus nihil natus, at in ut maiores
				cum repellendus quod reprehenderit earum, omnis iusto, vitae
				quam cupiditate ad culpa consectetur? Sequi repellat
				exercitationem dolore quo magni officiis aliquam tenetur,
				officia, iure quos non deleniti eum consectetur autem eligendi a
				libero at et illum, voluptatem aliquid! Deserunt eos doloribus,
				magni quaerat exercitationem sint obcaecati dolores consequuntur
				necessitatibus similique nisi, impedit ipsa sunt corporis dolore
				neque error illum voluptatum perferendis? Id eum ab ad eaque
				laboriosam iusto iure, repellendus esse dolore rerum. Sit fugit
				obcaecati eum delectus et repellat, enim fugiat praesentium
				eaque nesciunt nihil magnam commodi nisi molestias placeat
				atque! A, atque suscipit. Maxime repudiandae, iste explicabo
				possimus fugit labore quia, sunt necessitatibus accusamus
				cupiditate iure. Modi, placeat ut animi distinctio et vero
				repellat, molestiae aliquam quia similique odio iste quis
				reiciendis laboriosam? Ad, rerum deserunt veniam dolorum ut
				officia officiis fuga quibusdam quae neque cum, reiciendis
				corrupti id repellat quis dicta, eius magnam!
			</p>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
				quasi culpa ut voluptate similique, deserunt itaque nam nihil
				vel in officiis eum repudiandae dolorum recusandae dignissimos,
				dolore veritatis sed? Officia eaque nulla, blanditiis aperiam
				hic dicta odit laborum ipsam excepturi assumenda harum maiores
				dolores at quibusdam eius, praesentium consequatur sed! Ad fuga
				vel neque amet eveniet, sit pariatur aliquam corrupti
				dignissimos architecto debitis accusantium in excepturi quis nam
				nobis? Quidem neque consequatur vitae tempora sapiente quasi
				distinctio, qui esse commodi accusantium. Minima itaque cum
				explicabo culpa mollitia, nobis iure nulla at harum voluptatem
				sequi odio facere distinctio aliquam beatae exercitationem quam.
				Nihil voluptatibus ab inventore provident fugiat quasi
				perspiciatis impedit iure, in explicabo expedita nesciunt error
				vel tempore saepe nisi quidem sunt tenetur temporibus eius nemo
				ad. Quia perspiciatis ipsa dignissimos odio quasi dolore, sed
				alias tempore iure voluptas nesciunt est maxime provident
				dolorem culpa quam esse? Quisquam illum eaque culpa commodi
				incidunt! Praesentium perferendis obcaecati debitis cupiditate
				magnam, asperiores, facere veritatis, quis ipsum ducimus nobis
				error nostrum accusantium. Cupiditate labore doloremque nulla
				eum dolor tenetur rem aspernatur repellat nisi, iure distinctio
				saepe reprehenderit, mollitia nam nostrum officiis eveniet ab
				exercitationem ad. Dolore, enim, quo asperiores ab eligendi
				laudantium exercitationem perferendis voluptatibus beatae, natus
				non quaerat voluptatum magni perspiciatis deserunt officiis quos
				ipsum voluptate aperiam! Totam labore doloribus esse ipsum
				blanditiis hic facere soluta eligendi sapiente placeat,
				doloremque nesciunt velit numquam nostrum tempore ratione eaque
				autem modi excepturi reiciendis quis! Adipisci incidunt magnam
				impedit? Quo, vero autem doloribus dignissimos quidem vitae iste
				aut, dolorem, eveniet ipsa cum dolor sed? Doloribus architecto,
				impedit illum dolor quasi vel dolores reiciendis quo minus ipsum
				fugiat officiis praesentium perferendis sunt, possimus natus
				laborum! Est sed, officia quam tempore debitis ullam ipsum.
				Eveniet, perferendis distinctio suscipit illo dolorem dicta
				repellat. Amet dolor vero velit dolore iste atque cumque
				tempora, voluptatibus nesciunt fugiat similique ad culpa autem
				fugit perspiciatis voluptate, magni laboriosam architecto
				suscipit soluta et. Nulla delectus modi veritatis quia rem
				tempora dolore recusandae inventore ratione eaque libero,
				temporibus commodi culpa sapiente nobis assumenda? Dignissimos
				aliquam explicabo sit fugit debitis itaque iste ipsam iure fuga
				odit, facilis ipsa ex, aspernatur molestias mollitia ducimus?
				Nobis impedit animi molestias architecto aliquid, porro ab fugit
				laborum error, nihil blanditiis nam inventore eos dolor maiores
				sed saepe dolorum recusandae? Quos tempora aspernatur itaque
				reprehenderit numquam fuga laboriosam, quod molestias possimus
				tempore quisquam obcaecati magnam consectetur pariatur tenetur
				quia rerum dolorum quo alias delectus ea. Voluptate velit ipsa
				repellendus consequuntur voluptates deleniti adipisci dicta esse
				maiores perspiciatis saepe quibusdam nulla voluptatibus mollitia
				fuga, tempora sit explicabo vitae perferendis commodi illo quod
				deserunt? Ad obcaecati sed voluptatum aliquid, at hic modi illum
				temporibus amet beatae consequatur dolores. Eaque voluptatum sit
				quisquam numquam quos, maiores quasi explicabo voluptas alias,
				ratione optio eius nihil aliquam obcaecati minima nam. Eligendi
				nihil tenetur libero possimus doloremque harum magni
				accusantium, repellendus, fugiat nulla ea aut quo molestiae
				mollitia blanditiis architecto, voluptas corrupti beatae illo
				vel neque. Quasi dolore repellendus sequi quod quae enim sint?
				Quam, temporibus.
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
				quasi culpa ut voluptate similique, deserunt itaque nam nihil
				vel in officiis eum repudiandae dolorum recusandae dignissimos,
				dolore veritatis sed? Officia eaque nulla, blanditiis aperiam
				hic dicta odit laborum ipsam excepturi assumenda harum maiores
				dolores at quibusdam eius, praesentium consequatur sed! Ad fuga
				vel neque amet eveniet, sit pariatur aliquam corrupti
				dignissimos architecto debitis accusantium in excepturi quis nam
				nobis? Quidem neque consequatur vitae tempora sapiente quasi
				distinctio, qui esse commodi accusantium. Minima itaque cum
				explicabo culpa mollitia, nobis iure nulla at harum voluptatem
				sequi odio facere distinctio aliquam beatae exercitationem quam.
				Nihil voluptatibus ab inventore provident fugiat quasi
				perspiciatis impedit iure, in explicabo expedita nesciunt error
				vel tempore saepe nisi quidem sunt tenetur temporibus eius nemo
				ad. Quia perspiciatis ipsa dignissimos odio quasi dolore, sed
				alias tempore iure voluptas nesciunt est maxime provident
				dolorem culpa quam esse? Quisquam illum eaque culpa commodi
				incidunt! Praesentium perferendis obcaecati debitis cupiditate
				magnam, asperiores, facere veritatis, quis ipsum ducimus nobis
				error nostrum accusantium. Cupiditate labore doloremque nulla
				eum dolor tenetur rem aspernatur repellat nisi, iure distinctio
				saepe reprehenderit, mollitia nam nostrum officiis eveniet ab
				exercitationem ad. Dolore, enim, quo asperiores ab eligendi
				laudantium exercitationem perferendis voluptatibus beatae, natus
				non quaerat voluptatum magni perspiciatis deserunt officiis quos
				ipsum voluptate aperiam! Totam labore doloribus esse ipsum
				blanditiis hic facere soluta eligendi sapiente placeat,
				doloremque nesciunt velit numquam nostrum tempore ratione eaque
				autem modi excepturi reiciendis quis! Adipisci incidunt magnam
				impedit? Quo, vero autem doloribus dignissimos quidem vitae iste
				aut, dolorem, eveniet ipsa cum dolor sed? Doloribus architecto,
				impedit illum dolor quasi vel dolores reiciendis quo minus ipsum
				fugiat officiis praesentium perferendis sunt, possimus natus
				laborum! Est sed, officia quam tempore debitis ullam ipsum.
				Eveniet, perferendis distinctio suscipit illo dolorem dicta
				repellat. Amet dolor vero velit dolore iste atque cumque
				tempora, voluptatibus nesciunt fugiat similique ad culpa autem
				fugit perspiciatis voluptate, magni laboriosam architecto
				suscipit soluta et. Nulla delectus modi veritatis quia rem
				tempora dolore recusandae inventore ratione eaque libero,
				temporibus commodi culpa sapiente nobis assumenda? Dignissimos
				aliquam explicabo sit fugit debitis itaque iste ipsam iure fuga
				odit, facilis ipsa ex, aspernatur molestias mollitia ducimus?
				Nobis impedit animi molestias architecto aliquid, porro ab fugit
				laborum error, nihil blanditiis nam inventore eos dolor maiores
				sed saepe dolorum recusandae? Quos tempora aspernatur itaque
				reprehenderit numquam fuga laboriosam, quod molestias possimus
				tempore quisquam obcaecati magnam consectetur pariatur tenetur
				quia rerum dolorum quo alias delectus ea. Voluptate velit ipsa
				repellendus consequuntur voluptates deleniti adipisci dicta esse
				maiores perspiciatis saepe quibusdam nulla voluptatibus mollitia
				fuga, tempora sit explicabo vitae perferendis commodi illo quod
				deserunt? Ad obcaecati sed voluptatum aliquid, at hic modi illum
				temporibus amet beatae consequatur dolores. Eaque voluptatum sit
				quisquam numquam quos, maiores quasi explicabo voluptas alias,
				ratione optio eius nihil aliquam obcaecati minima nam. Eligendi
				nihil tenetur libero possimus doloremque harum magni
				accusantium, repellendus, fugiat nulla ea aut quo molestiae
				mollitia blanditiis architecto, voluptas corrupti beatae illo
				vel neque. Quasi dolore repellendus sequi quod quae enim sint?
				Quam, temporibus.
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
				quasi culpa ut voluptate similique, deserunt itaque nam nihil
				vel in officiis eum repudiandae dolorum recusandae dignissimos,
				dolore veritatis sed? Officia eaque nulla, blanditiis aperiam
				hic dicta odit laborum ipsam excepturi assumenda harum maiores
				dolores at quibusdam eius, praesentium consequatur sed! Ad fuga
				vel neque amet eveniet, sit pariatur aliquam corrupti
				dignissimos architecto debitis accusantium in excepturi quis nam
				nobis? Quidem neque consequatur vitae tempora sapiente quasi
				distinctio, qui esse commodi accusantium. Minima itaque cum
				explicabo culpa mollitia, nobis iure nulla at harum voluptatem
				sequi odio facere distinctio aliquam beatae exercitationem quam.
				Nihil voluptatibus ab inventore provident fugiat quasi
				perspiciatis impedit iure, in explicabo expedita nesciunt error
				vel tempore saepe nisi quidem sunt tenetur temporibus eius nemo
				ad. Quia perspiciatis ipsa dignissimos odio quasi dolore, sed
				alias tempore iure voluptas nesciunt est maxime provident
				dolorem culpa quam esse? Quisquam illum eaque culpa commodi
				incidunt! Praesentium perferendis obcaecati debitis cupiditate
				magnam, asperiores, facere veritatis, quis ipsum ducimus nobis
				error nostrum accusantium. Cupiditate labore doloremque nulla
				eum dolor tenetur rem aspernatur repellat nisi, iure distinctio
				saepe reprehenderit, mollitia nam nostrum officiis eveniet ab
				exercitationem ad. Dolore, enim, quo asperiores ab eligendi
				laudantium exercitationem perferendis voluptatibus beatae, natus
				non quaerat voluptatum magni perspiciatis deserunt officiis quos
				ipsum voluptate aperiam! Totam labore doloribus esse ipsum
				blanditiis hic facere soluta eligendi sapiente placeat,
				doloremque nesciunt velit numquam nostrum tempore ratione eaque
				autem modi excepturi reiciendis quis! Adipisci incidunt magnam
				impedit? Quo, vero autem doloribus dignissimos quidem vitae iste
				aut, dolorem, eveniet ipsa cum dolor sed? Doloribus architecto,
				impedit illum dolor quasi vel dolores reiciendis quo minus ipsum
				fugiat officiis praesentium perferendis sunt, possimus natus
				laborum! Est sed, officia quam tempore debitis ullam ipsum.
				Eveniet, perferendis distinctio suscipit illo dolorem dicta
				repellat. Amet dolor vero velit dolore iste atque cumque
				tempora, voluptatibus nesciunt fugiat similique ad culpa autem
				fugit perspiciatis voluptate, magni laboriosam architecto
				suscipit soluta et. Nulla delectus modi veritatis quia rem
				tempora dolore recusandae inventore ratione eaque libero,
				temporibus commodi culpa sapiente nobis assumenda? Dignissimos
				aliquam explicabo sit fugit debitis itaque iste ipsam iure fuga
				odit, facilis ipsa ex, aspernatur molestias mollitia ducimus?
				Nobis impedit animi molestias architecto aliquid, porro ab fugit
				laborum error, nihil blanditiis nam inventore eos dolor maiores
				sed saepe dolorum recusandae? Quos tempora aspernatur itaque
				reprehenderit numquam fuga laboriosam, quod molestias possimus
				tempore quisquam obcaecati magnam consectetur pariatur tenetur
				quia rerum dolorum quo alias delectus ea. Voluptate velit ipsa
				repellendus consequuntur voluptates deleniti adipisci dicta esse
				maiores perspiciatis saepe quibusdam nulla voluptatibus mollitia
				fuga, tempora sit explicabo vitae perferendis commodi illo quod
				deserunt? Ad obcaecati sed voluptatum aliquid, at hic modi illum
				temporibus amet beatae consequatur dolores. Eaque voluptatum sit
				quisquam numquam quos, maiores quasi explicabo voluptas alias,
				ratione optio eius nihil aliquam obcaecati minima nam. Eligendi
				nihil tenetur libero possimus doloremque harum magni
				accusantium, repellendus, fugiat nulla ea aut quo molestiae
				mollitia blanditiis architecto, voluptas corrupti beatae illo
				vel neque. Quasi dolore repellendus sequi quod quae enim sint?
				Quam, temporibus.
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
				quasi culpa ut voluptate similique, deserunt itaque nam nihil
				vel in officiis eum repudiandae dolorum recusandae dignissimos,
				dolore veritatis sed? Officia eaque nulla, blanditiis aperiam
				hic dicta odit laborum ipsam excepturi assumenda harum maiores
				dolores at quibusdam eius, praesentium consequatur sed! Ad fuga
				vel neque amet eveniet, sit pariatur aliquam corrupti
				dignissimos architecto debitis accusantium in excepturi quis nam
				nobis? Quidem neque consequatur vitae tempora sapiente quasi
				distinctio, qui esse commodi accusantium. Minima itaque cum
				explicabo culpa mollitia, nobis iure nulla at harum voluptatem
				sequi odio facere distinctio aliquam beatae exercitationem quam.
				Nihil voluptatibus ab inventore provident fugiat quasi
				perspiciatis impedit iure, in explicabo expedita nesciunt error
				vel tempore saepe nisi quidem sunt tenetur temporibus eius nemo
				ad. Quia perspiciatis ipsa dignissimos odio quasi dolore, sed
				alias tempore iure voluptas nesciunt est maxime provident
				dolorem culpa quam esse? Quisquam illum eaque culpa commodi
				incidunt! Praesentium perferendis obcaecati debitis cupiditate
				magnam, asperiores, facere veritatis, quis ipsum ducimus nobis
				error nostrum accusantium. Cupiditate labore doloremque nulla
				eum dolor tenetur rem aspernatur repellat nisi, iure distinctio
				saepe reprehenderit, mollitia nam nostrum officiis eveniet ab
				exercitationem ad. Dolore, enim, quo asperiores ab eligendi
				laudantium exercitationem perferendis voluptatibus beatae, natus
				non quaerat voluptatum magni perspiciatis deserunt officiis quos
				ipsum voluptate aperiam! Totam labore doloribus esse ipsum
				blanditiis hic facere soluta eligendi sapiente placeat,
				doloremque nesciunt velit numquam nostrum tempore ratione eaque
				autem modi excepturi reiciendis quis! Adipisci incidunt magnam
				impedit? Quo, vero autem doloribus dignissimos quidem vitae iste
				aut, dolorem, eveniet ipsa cum dolor sed? Doloribus architecto,
				impedit illum dolor quasi vel dolores reiciendis quo minus ipsum
				fugiat officiis praesentium perferendis sunt, possimus natus
				laborum! Est sed, officia quam tempore debitis ullam ipsum.
				Eveniet, perferendis distinctio suscipit illo dolorem dicta
				repellat. Amet dolor vero velit dolore iste atque cumque
				tempora, voluptatibus nesciunt fugiat similique ad culpa autem
				fugit perspiciatis voluptate, magni laboriosam architecto
				suscipit soluta et. Nulla delectus modi veritatis quia rem
				tempora dolore recusandae inventore ratione eaque libero,
				temporibus commodi culpa sapiente nobis assumenda? Dignissimos
				aliquam explicabo sit fugit debitis itaque iste ipsam iure fuga
				odit, facilis ipsa ex, aspernatur molestias mollitia ducimus?
				Nobis impedit animi molestias architecto aliquid, porro ab fugit
				laborum error, nihil blanditiis nam inventore eos dolor maiores
				sed saepe dolorum recusandae? Quos tempora aspernatur itaque
				reprehenderit numquam fuga laboriosam, quod molestias possimus
				tempore quisquam obcaecati magnam consectetur pariatur tenetur
				quia rerum dolorum quo alias delectus ea. Voluptate velit ipsa
				repellendus consequuntur voluptates deleniti adipisci dicta esse
				maiores perspiciatis saepe quibusdam nulla voluptatibus mollitia
				fuga, tempora sit explicabo vitae perferendis commodi illo quod
				deserunt? Ad obcaecati sed voluptatum aliquid, at hic modi illum
				temporibus amet beatae consequatur dolores. Eaque voluptatum sit
				quisquam numquam quos, maiores quasi explicabo voluptas alias,
				ratione optio eius nihil aliquam obcaecati minima nam. Eligendi
				nihil tenetur libero possimus doloremque harum magni
				accusantium, repellendus, fugiat nulla ea aut quo molestiae
				mollitia blanditiis architecto, voluptas corrupti beatae illo
				vel neque. Quasi dolore repellendus sequi quod quae enim sint?
				Quam, temporibus.
			</div>
		</div>
	);
}
